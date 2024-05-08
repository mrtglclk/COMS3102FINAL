import React, { useState, useEffect } from 'react';
import Post from './Post';
import { firestore } from './firebase'; // Make sure to import firestore

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore.collection('posts')
      .orderBy('createdAt', 'desc') // Make sure to index on 'createdAt' in Firestore
      .onSnapshot(snapshot => {
        const newPosts = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(newPosts);
      }, error => {
        console.error('Error fetching posts:', error);
      });

    // Clean up the listener on unmount
    return unsubscribe;
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
