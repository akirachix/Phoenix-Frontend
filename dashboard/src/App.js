import React from 'react';
import LineGraphsA from './Bargraph';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app-container">
      <Router>
        <div className="layout-container">
          <Sidebar />
          <div className="main-content">
            <Routes>
              <Route exact path='/' element={
                <>
                  
                  <h1>Performance Per Subject</h1>
                  <LineGraphsA />
                </>
              }/>
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;

