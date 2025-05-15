import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import errorImage from '../assets/error.png';

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate('/');
  };

  if (error.status === 404) {
    return (
      <>
        <img src={errorImage} alt="page not found" />
        <h2>OOps the page you are looking for doesn't exist...</h2>
        <button onClick={clickHandler}>Home Page</button>
      </>
    );
  }

  return <div>Something went wrong....!!</div>;
};

export default ErrorPage;
