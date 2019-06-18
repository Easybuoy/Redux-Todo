import React from "react";
import { connect } from "react-redux";

import { search } from "../../actions/todo";
function Search(props) {
  return (
    <>
      <input onChange={props.search} placeholder="Search" />
    </>
  );
}

const mapStateToProps = state => ({
  todo: state.todo
});

export default connect(
  mapStateToProps,
  { search }
)(Search);
