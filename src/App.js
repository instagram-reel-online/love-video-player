import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';

const App = () => {
  return (
    <LoginForm/>
    // <Router>
    //     <Route exact path="/" component={LoginForm} />
    //     {/* Add more routes for other pages */}
    // </Router>
  );
};

export default App;
