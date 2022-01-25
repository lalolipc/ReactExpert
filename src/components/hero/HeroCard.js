import React from 'react';
import { Link } from 'react-router-dom';

const HeroCard = ({id, superhero, publisher,alter_ego,first_appearance,characters}) => {
  return (
    <div className="col animate__animated animate__fadeIn">
    <div className="card">
      <div className="row no-gutters">
          <div className="col-4">
          <img alt="" src={`/assets/heroes/${id}.jpg`} className="card-img-top"/>
          </div>
          <div className="col-8">
          <div className="card-body">
          <h5>{superhero}</h5>
          <p>{alter_ego}</p>
          <Link to={`/hero/${id}`}>Más...</Link>
          </div>
          </div>
  </div>
  </div>
</div>);
};

export default HeroCard;
