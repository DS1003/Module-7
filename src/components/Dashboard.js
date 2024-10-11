import React from 'react';

const Dashboard = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Dashboard</h1>
      <p className="text-lg text-gray-700">
        This is the protected dashboard page, only accessible by logged-in users.
      </p>
    </div>
  );
};

export default Dashboard;
