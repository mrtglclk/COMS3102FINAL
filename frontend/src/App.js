import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Start from './Start';
import Feed from './Feed';
import Home from './Home';
import Profile from './Profile';
import CreatePost from './CreatePost';
import Newuser from './Newuser';
import Navbar from './Navbar';
import { AuthProvider, useAuth } from './AuthContext';
import SessionTimer from './SessionTimer';

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavbarComponent />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/feed" element={<ProtectedRoute><Feed /></ProtectedRoute>} />
            <Route path="/profile/:username" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/create-post" element={<ProtectedRoute><CreatePost /></ProtectedRoute>} />
            <Route path="/login" element={<LoginRoute><Start /></LoginRoute>} />
            <Route path="/newuser" element={<Newuser />} /> {/* Note: Changed case to lower for consistency */}
          </Routes>
          <TimerWrapper />
        </div>
      </Router>
    </AuthProvider>
  );
}

function NavbarComponent() {
  const { currentUser } = useAuth();
  return <Navbar currentUser={currentUser} />;
}

function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/login" replace />;
}

function LoginRoute({ children }) {
  const { currentUser } = useAuth();
  return currentUser ? <Navigate to="/feed" replace /> : children;
}

function TimerWrapper() {
  const { currentUser } = useAuth();
  return currentUser ? <SessionTimer /> : null;
}

export default App;
