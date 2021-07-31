import React from 'react';
import { SectionProject, CardWrapper, Tech } from './styles';
import data from '../assets/dataProjects/data';
import Project from '../components/Project';
import { icons } from '../assets/Icons';
import { useGlobalContext } from '../context';

export default function Projects() {
  const [name, setName] = React.useState('');
  const [cards, setCards] = React.useState([]);
  const { language } = useGlobalContext();

  React.useEffect(() => {
    handleClick('Javascript');
  }, [])
 
  const handleClick = (title) => {
    setName(title);
    const newArray = data.filter((item) => (item.technologys.includes(title)));
    setCards(newArray);
  }

  return (
    <SectionProject>
      <header>
        {language ? <h1>Projetos</h1> : <h1>Projects</h1>}
        <div className="underline"></div>
      </header>
      <Tech>
        {icons.map(({ icon, id, title }) =>(
          <button
            key={ id }
            className={name === title ? 'active' : ''}
            onClick={ () => handleClick(title) }
            title={ title }
          >
            { icon }
          </button>
        ))}
      </Tech>
      <CardWrapper className="container">
        {cards.map((project) => <Project key={ project.id } { ...project } />)}
      </CardWrapper>
    </SectionProject>
  )
}
