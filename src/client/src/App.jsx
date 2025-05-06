import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import Profile from './pages/Profile';
import Admin from './pages/Admin';

function NotFound() {
  return <h2>404: Page Not Found</h2>;
}

export default function App() {
  return (
    <>
      <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
        <Link to="/">Home</Link> |{' '}
        <Link to="/login">Login</Link> |{' '}
        <Link to="/register">Register</Link> |{' '}
        <Link to="/dashboard">Dashboard</Link> |{' '}
        <Link to="/courses">Courses</Link> |{' '}
        <Link to="/profile">Profile</Link> |{' '}
        <Link to="/admin">Admin</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
} 