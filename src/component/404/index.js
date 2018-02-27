import React, { Component } from 'react';

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class NotFound extends Component {
  render() {
    return (
      <div className="NotFound">
        404 Not Found
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
)(NotFound))
