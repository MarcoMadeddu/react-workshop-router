import React from 'react';
import{
  BrowserRouter as Router
} from 'react-router-dom';

import './App.css';
import { Navbar } from './core/Navbar';

function App() {
  return (
   <Router>
    <div>
      <Navbar></Navbar>
    </div>
   </Router>
  );
}

export default App;
