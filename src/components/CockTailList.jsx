import React from 'react';
import { NavLink } from 'react-router-dom';

const CockTailList = ({ drinks }) => {
  return (
    <section>
      {drinks.map((drink) => (
        <article key={drink.idDrink}>
          <img src={drink.strDrinkThumb} alt="" />
          <p>{drink.strDrink}</p>
          <p>{drink.strGlass}</p>
          <p>{drink.strAlcoholic}</p>
          <NavLink to={`/cocktail/${drink.idDrink}`}>Details</NavLink>
        </article>
      ))}
    </section>
  );
};

export default CockTailList;
