import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
// import JsonDataPage from './components/JsonDataPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Sidebar />
          {/* <Routes> */}
            {/* Routes without using Switch */}
            {/* <Route path="/json-data" component={JsonDataPage} /> */}
            {/* Add more routes as needed */}
          {/* </Routes> */}
          <MainContent />

          
          
        </div>
      </div>
    </Router>
  );
}

export default App;
