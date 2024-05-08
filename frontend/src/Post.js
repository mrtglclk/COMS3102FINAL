import React, { useEffect, useState } from 'react';
import { firestore } from './firebase';
import { useAuth } from './AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactPlayer from 'react-player';

const Post = ({ post }) => {
    const { currentUser } = useAuth();
    const [comments, setComments] = useState(post.comments ?? []);
    const [likes, setLikes] = useState(post.likes ?? 0); // State for post likes

    const updateComments = async (updatedComments) => {
        try {
            await firestore.collection('posts').doc(post.id).update({ comments: updatedComments });
            setComments(updatedComments);
        } catch (error) {
            console.error("Error updating comments:", error);
            toast.error('Failed to update comments.');
        }
    };

    const updatePostLikes = async (updatedLikes) => {
        try {
            await firestore.collection('posts').doc(post.id).update({ likes: updatedLikes });
            setLikes(updatedLikes);
        } catch (error) {
            console.error("Error updating likes:", error);
            toast.error('Failed to update likes.');
        }
    };

    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this post?")) {
            try {
                await firestore.collection('posts').doc(post.id).delete();
                toast.success('Post deleted successfully!');
            } catch (error) {
                console.error("Error deleting post:", error);
                toast.error('Failed to delete post.');
            }
        }
    };

    const handlePostLike = () => {
        if (!currentUser) {
            toast.error('Please log in to like posts.');
            return;
        }
        updatePostLikes(likes + 1); // Increment likes by 1
    };

    const handleAddComment = (newComment) => {
        if (!currentUser) {
            toast.error('Please log in to comment on posts.');
            return;
        }
        const comment = {
            userId: currentUser.uid,
            userName: currentUser.displayName || "Anonymous",
            commentText: newComment,
            likes: 0
        };
        updateComments([...comments, comment]);
    };

    return (
        <div className="post">
            <div className="post-header">
                <h3>{post.title || "Untitled Post"}</h3>
            </div>
            <div className="post-body">
                <p>{post.content || "No content available."}</p>
                {post.musicUrl && <ReactPlayer url={post.musicUrl} controls width="100%" />}
            </div>
            <div className="post-actions">
                {currentUser?.uid === post.userId && (
                    <button className="delete-button" onClick={handleDelete}>Delete</button>
                )}
                <button className="like-button" onClick={handlePostLike}>
                    Like ({likes}) {/* Show number of likes */}
                </button>
            </div>
            <div className="post-comments">
                {comments.length > 0 ? comments.map((comment, index) => (
                    <div key={index} className="comment">
                        <p>{comment.commentText}</p>
                    </div>
                )) : <p>No comments yet.</p>}
                {currentUser && (
                    <input
                        type="text"
                        placeholder="Add a comment"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && e.target.value.trim()) {
                                handleAddComment(e.target.value);
                                e.target.value = '';  // Clear the input field after adding the comment
                            }
                        }}
                    />
                )}
            </div>
            <ToastContainer />
        </div>
    );
};

export default Post;
