
import './App.css';
import React, { Fragment } from 'react';
import Hero from './Hero';
import Herofn from './Herofn';
import Ak from './Ak';
import ImageSearch from './ImageSearch';
import ImageSearchfn from './ImageSearchfn';
import Page from './Page';
import Calcu from './Calcu';
import Calcufn from './Calcufn';
import WordSearch from './WordSearch';
import SignIn from './SignIn';
import User from './User';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

 


  return (
   <>
    <Router>
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
	    <div className="container-fluid">
	    <a className="navbar-brand" href="#">My React app</a>
	   
	    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
	      <div className="navbar-nav">
	      
        <Link className="nav-link active" to="/ak">Ak</Link>
        <Link className="nav-link active" to="/hero">Hero</Link>
        <Link className="nav-link active" to="/imagesearch">ImageSearch</Link>
        <Link className="nav-link active" to="/herofn">Herofn</Link>
        <Link className="nav-link active" to="/imagesearchfn">ImageSearchfn</Link>
        <Link className="nav-link active" to="/page">Page</Link>
        <Link className="nav-link active" to="/calcu">Calcu</Link>
        <Link className="nav-link active" to="/calcufn">Calcufn</Link>
        <Link className="nav-link active" to="/wordsearch">WordSearch</Link>
        <Link className="nav-link active" to="/signin">SignIn</Link>
        <Link className="nav-link active" to="/user">User</Link>

        {/* <Link className="nav-link active" to="/calci">Calculator</Link>  */}
	      </div>
	    </div>
	  </div>
	</nav>
        

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/ak">
          <Ak></Ak>
          </Route>
          <Route path="/hero">
          <Hero></Hero>
          </Route>
          <Route path="/imagesearch">
          <ImageSearch></ImageSearch>
          </Route>
          <Route path="/herofn">
          <Herofn></Herofn>
          </Route>
          <Route path="/imagesearchfn">
          <ImageSearchfn></ImageSearchfn>
          </Route>
          <Route path="/page">
          <Page></Page>
          </Route>
          <Route path="/calcu">
          <Calcu></Calcu>
          </Route>
          <Route path="/calcufn">
          <Calcufn></Calcufn>
          </Route>
          <Route path="/wordsearch">
          <WordSearch></WordSearch>
          </Route>
          <Route path="/signin">
          <SignIn></SignIn>
          </Route>
          <Route path="/user">
          <User></User>
          </Route>

          {/* <Route path="/calci">
          <Calci></Calci>
          </Route> */}
        </Switch>
      </div>
    </Router>
    
   
    </>

  );
}

export default App;
