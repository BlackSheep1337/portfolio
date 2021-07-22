import React from 'react';
import Alexandre from '../assets/picture/Alexandre.jpeg';
import HomePhrase from '../components/HeroPhrase';
import { Photo, Section, Links, LinksSkills, Footer } from './styles';
import { DiJsBadge, DiCss3, DiGit, DiHtml5, DiReact} from  "react-icons/di";
import { GrLinkedin } from 'react-icons/gr'
import { IoLogoTwitter, IoLogoGithub } from 'react-icons/io'
import { useGlobalContext } from '../context';
import Curriculum from '../assets/perfil-curricular/Perfil-curricular.odt'

export default function Home() {
  const { language } = useGlobalContext();
  const contact = {
    email: 'alexandresg19@gmail.com',
    telefone: '+55 (71) 98222-0370',

  }
  return (
    <main>
      <Section>
        <div className="picture-container">
          <Photo src={Alexandre} alt="Alexandre Santos" />
        </div>
        <HomePhrase />
      </Section>
      <LinksSkills>
      <h4>Stacks</h4>
        <span><a href="/"><DiJsBadge /></a></span>
        <span><a href="/"><DiHtml5 /></a></span>
        <span><a href="/"><DiCss3 /></a></span>
        <span><a href="/"><DiGit /></a></span>
        <span><a href="/"><DiReact /></a></span>
      </LinksSkills>
      <Links>
      <h4>Redes</h4>
          <span><a rel="noreferrer" target="_blank" href="https://github.com/Naitwa-Alexandre"><IoLogoGithub /></a></span>
          <span><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/alexandre-pereira-0aba82205/"><GrLinkedin /></a></span>
          <span><a rel="noreferrer" target="_blank" href="https://twitter.com/Alexand12749403"><IoLogoTwitter /></a></span>
        </Links>
      <Footer>
        {language ? <h4>Contatos</h4> : <h4>Contacts</h4>}
        <div className="contatos">
          <h4>{ contact.email }</h4>
          <h4>Download: <a href={ Curriculum } download>Curriculum</a></h4>
          <h5>{ contact.telefone }</h5>
        </div>
      </Footer>
    </main>
  )
}
