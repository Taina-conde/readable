import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import Navi from './Navi';
import HomeView from './HomeView'
import CategoriesListView from './CategoriesListView'
import PostDetailsView from './PostDetailsView'
import CreateEditView from './CreateEditView'
import CategoryView from './CategoryView'
import NotFound from './NotFound'
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux'
import {handleCategoryPosts, handleInitialData} from '../actions/shared'

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
              <Container >
                <Switch>
                  <Route path = '/posts' exact component = {HomeView}/>
                  <Route path = '/categories' exact component = {CategoriesListView}/>
                  <Route path = '/:category/posts' exact component = {CategoryView}/>
                  <Route path = '//:category/:post_id' exact component = {PostDetailsView}/>
                  <Route path = '/add' exact component = {CreateEditView}/>
                  <Route path = '/' component = {NotFound}/>
                </Switch>
              </Container>
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
