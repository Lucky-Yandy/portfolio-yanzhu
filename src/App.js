import React from 'react';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Homepage.js';
import Project from './components/Project/Project.js';
import Resume from'./components/Resume/Resume.js';
import Contact from './components/Contact/Contact.js';
const App = () => (
      <div > 
      <nav className="Navbar">
      <ul className="Navbar-menu">
        <li className="Navbarname"><a>Yan Zhu</a></li>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/resume'>Resume</NavLink></li>
        <li><NavLink to='/project'>Project</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
      </ul>
    </nav>  
   
     <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/resume' component={Resume}></Route>
        <Route exact path='/contact' component={Contact}></Route>
        <Route exact path='/project' component={Project}></Route>
      </Switch>
      
    

  </div>
    );
    
    


export default App;


