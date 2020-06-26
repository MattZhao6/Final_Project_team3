import React, { Component } from "react";
import store from "../store";
import { connect } from "react-redux";
import { getlist } from "../store/actionCreator";

class Content extends Component {
  componentDidMount = () => {
    const action = getlist();
    store.dispatch(action);
  };

  render() {
    return <div>this.props.picture</div>;
  }
}

const mapStateToProps = state => {
  return {
    picture: state.movielist.picture
  };
};

export default connect(mapStateToProps)(Content);
