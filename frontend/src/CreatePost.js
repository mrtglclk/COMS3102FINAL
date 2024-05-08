import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, firestore, storage } from './firebase';  // Ensure you import storage from Firebase
import { serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';  // Firebase storage functions

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [music, setMusic] = useState(null);  // State for music file
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleMusicChange = (event) => {
    setMusic(event.target.files[0]);  // Set the selected music file
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!auth.currentUser) {
      setError("You must be logged in to create a post!");
      return;
    }

    let musicUrl = "";  // Initialize music URL string

    // Handle music file upload if a file is selected
    if (music) {
      const musicRef = ref(storage, `music/${music.name}`);
      const uploadTask = uploadBytesResumable(musicRef, music);

      try {
        await new Promise((resolve, reject) => {
          uploadTask.on('state_changed', 
            (snapshot) => {
              // Handle upload progress
              // You could update state here if you want to show upload progress
            },
            (error) => reject(error),
            () => {
              // Get the downloadable URL
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                musicUrl = downloadURL;
                resolve();
              });
            }
          );
        });
      } catch (uploadError) {
        console.error('Error uploading music:', uploadError);
        setError('Error uploading music: ' + uploadError.message);
        return;  // Exit if there's an error
      }
    }

    const newPost = {
      title,
      content,
      musicUrl,  // Include the URL of the uploaded music file in the post
      userId: auth.currentUser.uid,
      createdAt: serverTimestamp()
    };

    try {
      await firestore.collection('posts').add(newPost);
      setTitle('');
      setContent('');
      setMusic(null);  // Reset the music file state
      navigate('/feed');
    } catch (postError) {
      console.error('Error creating post:', postError);
      setError('Error creating post: ' + postError.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post Title"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Post Content"
      />
      <input
        type="file"
        onChange={handleMusicChange}
        accept="audio/*"  // Accept only audio files
        placeholder="Upload Music"
      />
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePost;
