import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Card from './components/Card';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
       <Switch>
       <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/:user" component={Card} />
       </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
