import React from 'react';
import { getHeroByPublisher } from '../selectors/getHeroByPublisher';
import HeroCard from './HeroCard';

const HeroList = ({publisher}) => {
  const heroes=getHeroByPublisher(publisher)
    return  (
      <>
      <h1>Hero list</h1>    
        <div className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
          {heroes.map(hero=>
         <HeroCard  key={hero.id} id={hero.id} superhero={hero.superhero} alter_ego={hero.alter_ego}/>)}           
      </div>
      </>
  );
};

export default HeroList;
