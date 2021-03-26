import React from 'react'; 
import {Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import {handleInitialData} from '../actions/shared'
class HomeView extends React.Component {
    componentDidMount(){
        handleInitialData()
    }
    render(){
        return(
            <Container>

            </Container>
        )
    }
}
export default connect()(HomeView);