import React, { Component } from 'react';
import './Home.css';

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        Home
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Home))