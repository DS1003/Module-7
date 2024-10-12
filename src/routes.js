import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import MainFeed from './components/MAinFeed';



// Lazy load the Dashboard component
const Dashboard = lazy(() => import('./components/Dashboard'));

const AppRoutes = () => {
  
  return (
    <Suspense fallback={<div className='spinner'>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<MainFeed />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Dashboard />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
