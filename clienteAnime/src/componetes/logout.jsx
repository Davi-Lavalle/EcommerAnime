import React from 'react';
import {Link, useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <Link onClick={handleLogout}>Sair</Link>
  );
};

export default Logout;
