import React from 'react';
import Nav from './components/nav';
import Home from './views/home';
import About from './views/about';
import Resume from './views/resume';
import Gallery from './views/gallery';
import Contact from './views/contact';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="App container mx-auto px-4 lg:px-8 xl:px-0 text-gray-200">
      <Router>
        <Nav />
        <Home />
        <About />
        <Resume />
        <Gallery />
        <Contact />
      </Router>

    </div>
  );
}

export default App;
