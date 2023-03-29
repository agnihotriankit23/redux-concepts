import React from 'react';

import './App.css';
import {BrowserRouter as Router,Link,Route,Routes} from "react-router-dom"


import { Provider } from 'react-redux';
import { store } from './store';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';

function App() {
  return (
    <div className="App">

      <Provider store={store}>
        <Router>
          <Link to="/">Home </Link>
          <Link to="/contact">Contact </Link>
          <Link to="/login">Login </Link>
          <Routes>
            <Route path='/'  element={<Home />} />
            <Route path='/contact'  element={<Contact />} />
            <Route path='/login'  element={<Login />} />
          </Routes>
        </Router>
      </Provider>
      
    </div>
  );
}

export default App;
