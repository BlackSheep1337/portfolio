import React from 'react';
import { useParams } from 'react-router';
import data from '../assets/dataProjects/data';
import { SectionDetail, LinksDetails } from './styles';
import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { useGlobalContext } from '../context';


export default function ProjectDetails() {
  const { id } = useParams();
  const project = data.find((item) => item.id === parseFloat(id));
  const { image, title, descricao, github, html_url, technologys, description } = project;
  const { language } = useGlobalContext();
  return (
    <SectionDetail>
        <img src={ image } alt={ title } />
      <LinksDetails>
        <h1>{ title }</h1>
        {language ? <h3>{ descricao }</h3> : <h3>{ description }</h3>}
        <div className="redes-links">
          <a rel="noreferrer" target="_blank" href={ html_url }>
            <CgWebsite />
          </a>
          <a rel="noreferrer" target="_blank" href={ github }>
            <FaGithub />
          </a>
        </div>
        <ul className="habilities">
          {technologys.map((item) => (
            <span className="btn">{ item }</span>
          ))}
        </ul>
      </LinksDetails>
    </SectionDetail>
  )
}
