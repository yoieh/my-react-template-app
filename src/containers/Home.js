import React, { Component } from 'react';

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { Greeting } from '../components';

class Home extends Component {

  render() {
    return (
      <div className="Home">
        Home
        <Greeting />
      </div>
    );
  }
}

const mapStateToProps = state => ({
});
 
const mapDispatchToProps = dispatch => ({
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Home))
