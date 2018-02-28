import React, { Component } from 'react';

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getActiveLanguage } from "react-localize-redux";

class NotFound extends Component {
  render() {
    return (
      <div className="NotFound">
        404 Not Found
      </div>
    );
  }
}

const mapStateToProps = state => ({
    location: state.location,
    currentLanguage: getActiveLanguage(state.locale).code
});
 
const mapDispatchToProps = dispatch => ({
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NotFound))
