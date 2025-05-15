import React from 'react';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';

export const loader = async () => {
  const searchTerm = '';
  const response = await axios.get(`${url}${searchTerm}`);
  console.log(response.data.drinks);
  return { drinks: response.data.drinks, searchTerm };
};

const HomePage = () => {
  const { drinks, searchTerm } = useLoaderData();
  console.log(drinks);
  console.log(searchTerm)
  return <div>HomePage</div>;
};

export default HomePage;
