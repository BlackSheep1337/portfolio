import React from 'react'
import { useGlobalContext } from '../context';
import { Card } from './styles';

export default function Project({ image, title, technologys, id }) {
  const { language } = useGlobalContext();
  return (
    <Card>
      <img src={ image } alt={ title } />
      <h3>{ title }</h3>
      <div className="habilities">
        {technologys.map((tech, idx) => <span className="btn" key={ idx }>{tech}</span>)}
      </div>
      <div className="details">
        <a href={`projects/${ id }`} className="btn-primary">{`${language ? 'ver detalhes' : 'see details'}`}</a>
      </div>
    </Card>
  );
}
