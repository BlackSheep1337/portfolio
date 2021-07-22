import React from 'react';
import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Navbar  from './components/Navbar';
import ProjectDetails from './pages/ProjectDetails';
import { GlobalStyle } from './styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useGlobalContext } from './context';

export default function App() {
  const { darkMode } = useGlobalContext();
  return (
    <Router>
      <GlobalStyle darkMode={ darkMode } />
      <Navbar />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/projects" component={ Projects } />
        <Route path="/projects/:id" component={ ProjectDetails } />
      </Switch>
    </Router>
  );
}
