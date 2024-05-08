import React, { useState, useEffect } from 'react';
import { auth, firestore } from './firebase';
import { collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';

const Profile = () => {
  const [email, setEmail] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch user's email from Firebase Authentication
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setEmail(user.email);
      }
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      if (email) { // Only fetch posts if user's email is available
        setLoading(true);
        try {
          const postsQuery = query(collection(firestore, "posts"), where("email", "==", email));
          const querySnapshot = await getDocs(postsQuery);
          const postsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setPosts(postsData);
          setLoading(false);
        } catch (err) {
          console.error("Error fetching posts: ", err);
          setError("Failed to fetch posts.");
          setLoading(false);
        }
      }
    };

    fetchPosts();
  }, [email]);

  // Function to delete a post
  const deletePost = async (postId) => {
    try {
      await deleteDoc(doc(firestore, "posts", postId));
      // Update the state to reflect the change
      setPosts(posts.filter(post => post.id !== postId));
    } catch (err) {
      console.error("Error deleting post: ", err);
      setError("Failed to delete post.");
    }
  };

  return (
    <div>
      <h1>Welcome to Your Profile</h1>
      <p>This is an update that is yet to come.</p>
      <p>Your email: {email}</p>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      <div>
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <button onClick={() => deletePost(post.id)}>Delete Post</button>
            </div>
          ))
        ) : (
          <p>No posts found.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
