import React, {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Pages/Home/HomePage';
import Blog from './components/Pages/Blog/BlogPage';
import {AnimatedSwitch, spring} from 'react-router-transition';
import { callbackify } from 'util';


function glide(val) {
  return spring(val, {
    stiffness: 174,
    damping: 19,
  });
}

const rule = {
  paddingTop: '5rem',
  boxSizing: 'border-box',
  backgroundColor: '#fff',
  color: '#333'
};

const pageTransitions = {
  atEnter: {
    offset: 200,
    opacity: 0,
  },
  atLeave: {
    offset: glide(-100),
    opacity: glide(0),
  },
  atActive: {
    offset: glide(0),
    opacity: glide(1),
  },
};

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `translateX(${styles.offset}px)`,
  };
}


const switchRule = {
  position: 'relative',
  height: "calc('100vh -50px')",
  width: '100vw',
  backgroundColor: '#fff',
}

function App() {
  return (
   <Fragment>
      <Navbar/>
      <div>
        <Router>
          <AnimatedSwitch
            {...pageTransitions}
            mapStyles={mapStyles}
            css={switchRule}
          >
          <Route path="/" exact component={Home}/>
          <Route path="/what-is-influencer-marketing" exact component={Blog}/>
          </AnimatedSwitch>
        </Router>
      </div>
      <Footer/>
   </Fragment>
  );
}
export default App;
