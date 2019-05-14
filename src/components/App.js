import React, {Component} from 'react';
import './App.css';
import Header from './Header'
import Footer from './Footer'
import Banner from './Banner'
import Introduce from './Introduce.jsx'
import Product from './Product.jsx'
import Howitworks from './Howitworks'
import Review from './Review.jsx'
import Contact from './Contact'
import { BrowserRouter as Router} from 'react-router-dom'
// import {Route} from 'react-router-dom'

class App extends Component {
  render(){
      if(!process.env.REACT_APP_OKAY) {
          return (
              <h1>Hello World</h1>
          );
      }
    else {
      return (
          <Router>
              <Header />
              <Banner />
              <Introduce />
              <Product />
              <Howitworks />
              <Review />
              <Contact />
              <Footer />
          </Router>
      );
    }
  }
  
}

export default App;
