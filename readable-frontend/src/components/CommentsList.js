import React from "react";
import { connect } from "react-redux";
import Comment from "./Comment";

class CommentsList extends React.Component {
  render() {
    const { comments, commentCount, parentId, commentsIds } = this.props;
    const postCommentsIds = commentsIds.filter(
      (id) => comments[id].parentId === parentId
    );

    return (
      <div>
        {commentCount === 0 ? (
          <div className="no-comments">This post has no comments yet</div>
        ) : (
          postCommentsIds
            .filter((commentId) => comments[commentId].deleted !== true)
            .map((commentId) => {
              return <Comment id={commentId} key={commentId} />;
            })
        )}
      </div>
    );
  }
}
function mapStateToProps({ comments }) {
  return {
    comments,
    commentsIds: Object.keys(comments),
  };
}
export default connect(mapStateToProps)(CommentsList);
