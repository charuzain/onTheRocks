import React from 'react';
import { NavLink, Outlet, useNavigation } from 'react-router-dom';
import NavBar from '../components/NavBar';

const PageLayout = () => {
  const navigation = useNavigation();
  console.log(navigation);
  const isPageLoading = navigation.state === 'loading';
  return (
    <>
      <NavBar />
      {isPageLoading ? <div>Loading....</div> : <Outlet />}

      <footer>Footer</footer>
    </>
  );
};

export default PageLayout;
