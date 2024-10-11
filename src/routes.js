import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import withAuth from './hoc/withAuth';  // Importation du HOC

// Lazy load the Dashboard component
const Dashboard = lazy(() => import('./components/Dashboard'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={withAuth(<Dashboard />)} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
