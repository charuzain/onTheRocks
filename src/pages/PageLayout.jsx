import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const PageLayout = () => {
  return (
    <>
      <NavBar />

      <Outlet />
      <footer>Footer</footer>
    </>
  );
};

export default PageLayout;
