import logo from './logo.svg';

import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/pages';
import About from './components/pages/about';
import Menu from './components/pages/menu';
import Dropdown from './components/Dropdown';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };

    window.addEventListener('resize', hideMenu);
    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });
    return (
      <>
        <NavBar toggle={toggle}></NavBar>
        <Dropdown isOpen={isOpen} toggle={toggle}></Dropdown>
        {/* <Router> */}
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/menu'>
              <Menu></Menu>
            </Route>
          </Switch>
        {/* </Router> */}
        <Footer></Footer>
      </>
    );
  }


export default App;

// import React, { useState, useEffect } from 'react';
// import Navbar from './components/Navbar';
// import { Switch, Route } from 'react-router-dom';
// import Home from './pages';
// import About from './pages/about';
// import Menu from './pages/menu';
// import Footer from './components/Footer';
// import Dropdown from './components/Dropdown';

// function App() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     const hideMenu = () => {
//       if (window.innerWidth > 768 && isOpen) {
//         setIsOpen(false);
//         console.log('i resized');
//       }
//     };

//     window.addEventListener('resize', hideMenu);

//     return () => {
//       window.removeEventListener('resize', hideMenu);
//     };
//   });

//   return (
//     <>
//       <Navbar toggle={toggle} />
//       <Dropdown isOpen={isOpen} toggle={toggle} />
//       <Switch>
//         <Route path='/' exact component={Home} />
//         <Route path='/menu' component={Menu} />
//         <Route path='/about' component={About} />
//       </Switch>
//       <Footer />
//     </>
//   );
// }

// export default App;
