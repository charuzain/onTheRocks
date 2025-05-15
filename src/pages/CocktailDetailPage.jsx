import React from 'react'
import { useParams } from 'react-router-dom'

const CocktailDetailPage = () => {
  const { id } = useParams();
  console.log(id)
  return (
    <div>cocktail- {id }</div>
  )
}

export default CocktailDetailPage