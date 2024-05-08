import React, { useState, useEffect } from 'react';  // Consolidate all React imports into one line
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useAuth } from './AuthContext';  // Make sure AuthContext is properly set up and exported

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { currentUser, auth } = useAuth();  // Destructure currentUser and auth from context
  const navigate = useNavigate();

  // Automatically redirect if the user is already logged in
  useEffect(() => {
    if (currentUser) {
      navigate('/');  // Redirect to home if already logged in
    }
  }, [currentUser, navigate]);

  const handleSignIn = async (event) => {
    event.preventDefault();
    setError('');  // Clear previous errors before a new sign-in attempt

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');  // Redirect to the home page after successful sign in
    } catch (error) {
      setError(error.message);  // Set error message if sign-in fails
    }
  };

  return (
    <form onSubmit={handleSignIn}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignInForm;
