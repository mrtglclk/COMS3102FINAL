import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const NewUser = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // State to store error messages
    const navigate = useNavigate();

    const handleSignUp = async (event) => {
        event.preventDefault();
        setError('');  // Clear previous errors
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log("User registered successfully");
            navigate('/'); // Navigate to the homepage or dashboard after successful signup
        } catch (error) {
            console.error("Error signing up:", error.message);
            setError("Failed to create an account: " + error.message);  // Display error message on the page
        }
    };

    return (
        <div className="newuser-container">
        <h2>New User</h2>
        <form onSubmit={handleSignUp} className="newuser-form">
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="newuser-input"
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="newuser-input"
              required
            />
          </label>
          <button type="submit" className="newuser-button">
            Sign Up
          </button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    );
};

export default NewUser;
