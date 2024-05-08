import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

const Start = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/'); // Redirect to home if already logged in
      }
    });
    return unsubscribe; // Cleanup subscription on unmount
  }, [navigate]);

  const signIn = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(''); // Clear previous errors
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError('Failed to log in: ' + error.message); // Provide a more detailed error
      setLoading(false); // Stop loading on error
    }
  };

  return (
<div className="login-container">
  <form onSubmit={signIn} className="login-form">
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Email Address"
      className="login-input"
      required
    />
    <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Password"
      className="login-input"
      required
    />
    <button type="submit" disabled={loading} className="login-button">
      {loading ? 'Logging in...' : 'Log In'}
    </button>
  </form>
  {error && <p style={{ color: 'red' }}>{error}</p>}
</div>

  );
};

export default Start;
