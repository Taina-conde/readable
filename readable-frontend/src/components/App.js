import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import HomeView from './HomeView'
import CategoriesListView from './CategoriesListView'
import PostDetailsView from './PostDetailsView'
import CreateEditView from './CreateEditView'
import CategoryView from './CategoryView'
import NotFound from './NotFound'
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux'
import { handleInitialData} from '../actions/shared'
import Sidebar from './Sidebar';
import Navi from './Navi';

class App extends React.Component {
 
  componentDidMount(){
    
    this.props.handleInitialData()
    
    
}
  render(){
    return (
      <Router >
          {this.props.ready 
            ? 
            <React.Fragment >
              <Navi/>
              <div className = 'wrapper'>
              <Sidebar />
              <Container>
                <Switch>
                  <Route path = '/posts' exact component = {HomeView}/>
                  <Route path = '/categories' exact component = {CategoriesListView}/>
                  <Route path = '/:category/posts' exact component = {CategoryView}/>
                  <Route path = '/:category/:post_id' exact component = {PostDetailsView}/>
                  <Route path = '/add' exact component = {CreateEditView}/>
                  <Route path = '/' component = {NotFound}/>
                </Switch>
              </Container>
              <div className = 'overlay'/>
              </div>
            </React.Fragment>
            : null
            
          }  
      </Router>
    );
  }
}
function mapStateToProps({categories}) {
  console.log('categories in map',categories)
  return {
    ready: Object.keys(categories).length !== 0
  }
}
export default connect(mapStateToProps, {handleInitialData})(App);
