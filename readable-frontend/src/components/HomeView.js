import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Post from "./Post";
import NewPostBtn from "./NewPostBtn";
import { generateUserIcon } from "../utils/helpers";
import CreateEditView from "./CreateEditView";
import PostButtons from "./PostButtons";
import SortBy from "./SortBy";

class HomeView extends React.Component {
  state = {
    showModal: false,
    userIcon: generateUserIcon(),
    sortBy: "featured",
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
  handleSort = (sortBy) => {
    this.setState({
      sortBy,
    });
  };

  render() {
    const { postsIds, posts, category } = this.props;
    const { showModal, userIcon, sortBy } = this.state;
    let postsArr = postsIds.filter((id) => posts[id].deleted === false);
    switch (sortBy) {
      case "most-recent":
        postsArr.sort((a, b) => posts[b].timestamp - posts[a].timestamp);
        break;
      case "highest-votes":
        postsArr.sort((a, b) => posts[b].voteScore - posts[a].voteScore);
        break;
      case "lowest-votes":
        postsArr.sort((a, b) => posts[a].voteScore - posts[b].voteScore);
        break;
      default:
        postsArr.sort((a, b) => posts[b].commentCount - posts[a].commentCount);
    }
    if (category === null) {
      return (
        <div>
          <NewPostBtn onHandleShow={this.handleShow} userIcon={userIcon} />
          <CreateEditView
            show={showModal}
            onHandleClose={this.handleClose}
            userIcon={userIcon}
            parent="homeview"
          />
          {postsIds && postsIds.length === 0 ? (
            <div className="no-posts">
              There are no posts in this category yet...
            </div>
          ) : (
            <React.Fragment>
              <SortBy onHandleSort={this.handleSort} value={sortBy} />
              <ul className="p-0 post-box">
                {postsArr.map((id, index) => (
                  <li
                    key={id}
                    className={
                      index === postsArr.length - 1
                        ? "last-item"
                        : "post-list-item"
                    }
                  >
                    <Link
                      to={`/${posts[id].category}/${id}`}
                      className="post-list-link"
                    >
                      <Post id={id} parent="HomeView" />
                    </Link>
                    <PostButtons
                      parent="HomeView"
                      id={id}
                      userIcon={userIcon}
                    />
                  </li>
                ))}
              </ul>
            </React.Fragment>
          )}
        </div>
      );
    }

    return (
      <div>
        <NewPostBtn onHandleShow={this.handleShow} userIcon={userIcon} />
        <CreateEditView
          show={showModal}
          onHandleClose={this.handleClose}
          userIcon={userIcon}
        />
        {postsArr.filter((id) => posts[id].category === category).length ===
        0 ? (
          <div className="no-posts">
            There are no posts in this category yet... Share your thoughts!
          </div>
        ) : (
          <React.Fragment>
            <SortBy onHandleSort={this.handleSort} value={sortBy} />
            <ul className="p-0 post-box">
              {postsArr
                .filter((id) => posts[id].category === category)
                .map((id, index) => (
                  <li
                    key={id}
                    className={
                      index === postsArr.length - 1
                        ? "last-item"
                        : "post-list-item"
                    }
                  >
                    <Link
                      to={`/${posts[id].category}/${id}`}
                      className="post-list-link"
                    >
                      <Post id={id} parent="HomeView" />
                    </Link>
                    <PostButtons
                      parent="HomeView"
                      id={id}
                      userIcon={userIcon}
                    />
                  </li>
                ))}
            </ul>
          </React.Fragment>
        )}
      </div>
    );
  }
}
function mapStateToProps({ posts }, { match }) {
  const params = match.params;

  return {
    postsIds: Object.keys(posts),
    posts,
    category: params.category === undefined ? null : params.category,
  };
}
export default connect(mapStateToProps)(HomeView);
