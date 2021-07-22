import React from 'react'
import { useGlobalContext } from '../context';

const HeroPhrase = () => {
  const { language } = useGlobalContext();
  console.log(language);
  if (!language) {
    return (
      <h4>Hello my name is Alexandre Santos Pereira, a dedicated developer that loves learning and sharing knowledge. Atm im studying front end with the following technologys, I would be honored to participate in your project
      </h4>
    )
  }
  return (
    <h4>Olá! Meu nome eh Alexandre Santos Pereira, Sou nascido e criado no lado nordeste do país, estou em transição de carreira, venho da administração para realizar o sonho de mundar o mundo atravez da tecnologia.
    </h4>
  )
}

export default HeroPhrase;
