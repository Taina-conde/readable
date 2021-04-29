import React from "react";
import { Row, Col } from "react-bootstrap";
import { IoHappyOutline } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import { connect } from "react-redux";
import { handleAddComment } from "../actions/shared";

class NewComment extends React.Component {
  state = {
    input: "",
  };
  handleInputChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, parentId } = this.props;
    const body = this.state.input;
    dispatch(handleAddComment(parentId, body));
    this.setState({
      input: "",
    });
  };
  render() {
    const { input } = this.state;
    return (
      <Row className="new-comment-row">
        <Col xs="1" className="comment-icon p-0 text-center">
          <IoHappyOutline size={35} />
        </Col>
        <Col xs="11" className="p-0">
          <form className="d-flex comment-form" onSubmit={this.handleSubmit}>
            <input
              className=" col-10 col-md-11 form-control"
              type="text"
              placeholder="Add a comment..."
              value={input}
              onChange={this.handleInputChange}
            />
            <button
              type="submit"
              className="col-2 col-md-1 comment-submit-btn"
              disabled={!input}
            >
              <FiSend size={18} className="d-none d-md-inline" />
              <span className="d-md-none">Post</span>
            </button>
          </form>
        </Col>
      </Row>
    );
  }
}
export default connect()(NewComment);
