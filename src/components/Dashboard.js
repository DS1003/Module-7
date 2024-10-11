import React from 'react';
import withAuth from '../hoc/withAuth';  // Importer le HOC

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Bienvenue dans votre espace personnel !</p>
    </div>
  );
};

export default withAuth(Dashboard);  // Appliquer le HOC
