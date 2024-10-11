import React from 'react';

function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    const isAuthenticated = localStorage.getItem('isAuthenticated');

    if (!isAuthenticated) {
      return <h1>Please log in first</h1>;
    }

    return <Component {...props} />;
  };
}

export default withAuth;
