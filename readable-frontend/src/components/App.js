import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navi from './Navi';

class App extends React.Component {
  render(){
    return (
      <Router >
        <React.Fragment>
          <Navi/>
          
        </React.Fragment>
        
      </Router>
    );
  }
}

export default App;
