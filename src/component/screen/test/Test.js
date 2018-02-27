import React, { Component } from 'react';
import './Test.css';

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Test extends Component {
  render() {
    let {locale, id} = this.props.match.params
    return (
      <div className="Test">
        TEST
        <div>
        {locale ? locale : null}
        </div>
        <div>
          {id ? id : null}
        </div>
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
)(Test))
