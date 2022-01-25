import React from 'react';
import { Navigate, useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { getHeroById } from '../selectors/getHeroById';


export const HeroScreen = () => {
  const {heroId}=useParams();
  const hero=getHeroById(heroId);
  let navigate = useNavigate();
  if(!hero){
    return <Navigate to='/'/>
  }

  const handleReturn=()=>{
    return navigate(-1)
  }
    return (
        <div className="row container mt-5"> 
        <div className="col-4">
             <img alt={hero.superhero} src={`/assets/heroes/${heroId}.jpg`} className="img-thumbnail"/>    
      
             </div>
             <div className="col-8">
             <h3>{hero.superhero}</h3>
        <ul className="list-group ">
        <li className="lust-group-item">alter hero: {hero.alter_ego}</li>
        <li className="lust-group-item">alter hero: {hero.publisher}</li>


</ul>

<button className="btn btn-primary" onClick={handleReturn}>Return</button>

             </div>
        </div>
    )
}

