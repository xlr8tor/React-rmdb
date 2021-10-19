import React from 'react';

//Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Components
import Header from './components/Header/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';
//Styles
import { GlobalStyle } from './GlobalStyles';

const App = () => ( 
  <Router basename="/React-rmdb">
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:movieID' element={<Movie/>} />
      <Route path='/*' element={<NotFound/>} />
    </Routes>
    <GlobalStyle />
  </Router>)
  
   
  

export default App;
