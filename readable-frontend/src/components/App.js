import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import Navi from './Navi';
import HomeView from './HomeView'
import CategoriesView from './CategoriesView'
import PostDetailsView from './PostDetailsView'
import CreateEditView from './CreateEditView'
import NotFound from './NotFound'
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'

class App extends React.Component {
  componentDidMount(){
    const {dispatch} = this.props
    handleInitialData()
}
  render(){
    return (
      <Router >
        <React.Fragment>
          <Navi/>
          <Container>
            <Switch>
              <Route path = '/posts' exact component = {HomeView}/>
              <Route path = '/:category' exact component = {CategoriesView}/>
              <Route path = '//:category/:post_id' exact component = {PostDetailsView}/>
              <Route path = '/add' exact component = {CreateEditView}/>
              <Route path = '/' component = {NotFound}/>
            </Switch>
          </Container>
          
        </React.Fragment>
        
      </Router>
    );
  }
}

export default connect()(App);
