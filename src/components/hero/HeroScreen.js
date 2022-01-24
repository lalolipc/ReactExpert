import React from 'react';
import { Navigate, useParams } from 'react-router';
import { getHeroById } from '../selectors/getHeroById';


export const HeroScreen = () => {
  const {heroId}=useParams();
  const hero=getHeroById(heroId)
  if(!hero){
    return <Navigate to=''/>
  }
    return (
        <div className="container mt-5">          
             <h1>{hero.superhero}</h1>
        </div>
    )
}

