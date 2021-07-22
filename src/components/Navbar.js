import React from 'react';
import { Nav, List, Buttons } from './styles';
import { IoLanguageSharp } from "react-icons/io5";
import { RiLightbulbFlashFill, RiLightbulbFlashLine } from "react-icons/ri";
import { useGlobalContext } from '../context';
export default function Navbar() {
  const { setLanguage, language, darkMode, setDarkMode } = useGlobalContext();
  return (
    <Nav>
      <div className="nav-logo">
        <a href="/">
          <h3>Alexandre Santos</h3>
        </a>
      </div>
      <div className="nav-links">
        <List>
        <a href="/">
          {language ? <h4>Sobre</h4> : <h4>About</h4>}
        </a>
        <a href="/projects">
          {language ? <h4>Projetos</h4> : <h4>Projects</h4> }
        </a> 
        </List>
      </div>
      <Buttons>
        <button className="language" onClick={ () => setLanguage((prevState) => !prevState) }>
          <IoLanguageSharp />
        <span style={{ fontSize: '20px'}}>{ language ?  'English' : 'Português' }</span>
        </button >
        <button className="lighter" onClick={ () => setDarkMode((prevState) => !prevState) }>
          {darkMode ? <RiLightbulbFlashFill /> : <RiLightbulbFlashLine />}
        </button>
      </Buttons>
    </Nav>
  )
}
