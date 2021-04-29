import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomeView from "./HomeView";
import PostDetailsView from "./PostDetailsView";
import NotFound from "./NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Sidebar from "./Sidebar";
import Navi from "./Navi";

class App extends React.Component {
  state = {
    toggleSidebar: false,
  };

  componentDidMount() {
    this.props.handleInitialData();
  }
  handleToggleSidebar = () => {
    this.setState({
      toggleSidebar: !this.state.toggleSidebar,
    });
  };
  render() {
    const { toggleSidebar } = this.state;
    return (
      <Router>
        {this.props.ready ? (
          <React.Fragment>
            <Navi
              onHandleToggleSidebar={this.handleToggleSidebar}
              toggleSidebar={toggleSidebar}
            />
            <div className="wrapper">
              <Sidebar
                toggleSidebar={toggleSidebar}
                onHandleToggleSidebar={this.handleToggleSidebar}
              />
              <Container className="mr-md-2 ml-md-2">
                <Switch>
                  <Route path="/" exact component={HomeView} />
                  <Route path="/:category/posts" exact component={HomeView} />
                  <Route
                    path="/:category/:post_id"
                    exact
                    component={PostDetailsView}
                  />
                  <Route path="/" component={NotFound} />
                </Switch>
              </Container>
              <div className={toggleSidebar ? "overlay d-active" : "overlay"} />
            </div>
          </React.Fragment>
        ) : null}
      </Router>
    );
  }
}
function mapStateToProps({ categories }) {
  return {
    ready: Object.keys(categories).length !== 0,
  };
}
export default connect(mapStateToProps, { handleInitialData })(App);
