import React, {useState, useEffect} from 'react'; 
import { Route, Link, NavLink } from 'react-router-dom';
import { Navbar, NavItem, Button, ButtonGroup } from 'reactstrap';
import Home from './components/Home';
import AvengersList from './components/AvengersList';
import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <header>
      <Navbar>
      <NavItem>
        <NavLink exact to='/' activeClassName="bestNav">Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to='/avengers' activeClassName="betterNav">Avengers List</NavLink>

      </NavItem>

      </Navbar>
      <Route exact path="/" component={Home}/>
      <Route path="/avengers" component={AvengersList} />
    </header>


  );
}



export default App;
