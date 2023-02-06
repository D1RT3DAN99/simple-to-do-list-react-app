import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/pages/Homepage';
import Todo from './components/pages/Todo';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/todo" element={<Todo/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
