import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useAuth } from './AuthContext';
import { auth } from './firebase';
function Navbar() {
  const { currentUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false); // State to handle menu toggle

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  return (
    <nav>
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)} aria-label="Menu" role="button" aria-expanded={isOpen}>
        &#9776; {/* Hamburger Icon */}
      </div>
      <ul style={{ display: isOpen ? 'block' : 'none' }} id="navigation">
        <li><Link to="/">Home</Link></li>
        {currentUser ? (
          <>
            <li><Link to="/create-post">Create Post</Link></li>
            <li><Link to={`/profile/${currentUser.uid}`}>Profile</Link></li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/Newuser">Sign Up</Link></li> {/* Added Sign Up link for non-logged in users */}
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
