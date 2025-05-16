import axios from 'axios';
import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export const loader = async (data) => {
  const id = data.params.id;
  const response = await axios.get(`${url}${id}`);
  const drink = response.data.drinks[0];
  console.log(drink);

  return { drink, id };
};

const CocktailDetailPage = () => {
  // const { id } = useParams();

  const { drink, id } = useLoaderData();
  console.log(drink);
  console.log(id);

  const navigate = useNavigate();
  const clickHandler = () => {
    navigate('/');
  };

  return (
    <>
      <button onClick={clickHandler}>Back</button>
      <h1>{drink.strDrink}</h1>
      <img src={drink.strDrinkThumb} alt={`${drink.strDrink} image`} />
      <p>name: {drink.strDrink}</p>
      <p> category: {drink.strCategory}</p>
      <p>Cocktail info :{drink.strGlass}</p>
      <p>Cocktail glass ingredients</p>
      {/* :Cocktail glass ingredients :Gin,Grand Marnier,Lemon Juice,Grenadine */}
      <p>instructions :{drink.strInstructions}</p>
    </>
  );
};

export default CocktailDetailPage;
