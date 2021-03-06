import React from "react";
import { connect } from "react-redux";
import { BiLike, BiDislike, BiDotsHorizontalRounded } from "react-icons/bi";
import { Dropdown } from "react-bootstrap";
import CustomDropdownToggle from "./CustomDropdownToggle";
import {
  handleSaveVoteToComment,
  handleDeleteComment,
} from "../actions/comments";
import EditCommentModal from "./EditCommentModal";
import { formatDate } from "../utils/helpers";

class Comment extends React.Component {
  state = {
    showModal: false,
  };
  handleVote = (option) => {
    const { comment, handleSaveVoteToComment } = this.props;
    handleSaveVoteToComment(comment.id, option);
  };
  handleDelete = () => {
    const { comment, handleDeleteComment } = this.props;
    handleDeleteComment(comment.id);
  };
  handleShow = () => {
    this.setState({
      showModal: true,
    });
  };
  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };
  render() {
    const { comment } = this.props;
    return (
      <div className="container comment-box">
        <div className="row flex-column ">
          <div className="col d-flex">
            <div className="col comment-author p-0">
              {comment.author.charAt(0).toUpperCase() + comment.author.slice(1)}{" "}
              says:
            </div>
            <div className="col  p-0 text-right comment-details">
              {formatDate(comment.timestamp)}
            </div>
          </div>
          <div className="col comment-body">{comment.body}</div>
        </div>
        <div className="row mt-2 mb-2">
          <div className="col-10 ">
            <button
              type="button"
              className="icon-btn mr-1"
              onClick={() => this.handleVote("downVote")}
            >
              <BiDislike className="text-success" size={20} />
            </button>

            <span className="comment-details">{comment.voteScore}</span>

            <button
              type="button"
              className="icon-btn ml-1"
              onClick={() => this.handleVote("upVote")}
            >
              <BiLike className="text-success " size={20} />
            </button>
          </div>
          <div className="col-2  text-right">
            <Dropdown>
              <Dropdown.Toggle as={CustomDropdownToggle} id="dropdown-basic">
                <BiDotsHorizontalRounded className="text-success" size={20} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/edit" onClick={this.handleShow}>
                  Edit
                </Dropdown.Item>
                <Dropdown.Item href="#/delete" onClick={this.handleDelete}>
                  Delete
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <EditCommentModal
          show={this.state.showModal}
          comment={comment}
          onHandleClose={this.handleClose}
        />
      </div>
    );
  }
}
function mapStateToProps({ comments }, { id }) {
  return {
    comment: comments[id],
  };
}
export default connect(mapStateToProps, {
  handleSaveVoteToComment,
  handleDeleteComment,
})(Comment);
