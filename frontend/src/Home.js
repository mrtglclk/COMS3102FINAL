import React, { useEffect, useState } from 'react';
import Post from './Post';
import { firestore } from './firebase';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const unsubscribe = firestore.collection('posts')
            .orderBy('createdAt', 'desc')
            .onSnapshot(snapshot => {
                setLoading(false);
                const loadedPosts = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setPosts(loadedPosts);
            }, err => {
                setError(err.message);
                setLoading(false);
            });

        return () => unsubscribe();
    }, []);

    if (loading) return <p>Loading posts...</p>;
    if (error) return <p>Error loading posts: {error}</p>;

    return (
        <div className="home-container">
            <div className="welcome-text">
                <h1>Link Lite - A Time Sensitive Social Website</h1>
                <p>Discover and share short experiences here. Update thougths and music and then go offline!</p>
            </div>
            <div className="posts-container">
                {posts.map((post) => <Post key={post.id} post={post} />)}
            </div>
        </div>
    );
};

export default Home;
