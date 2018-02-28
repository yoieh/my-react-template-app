import React, { Component } from 'react';
import './Test.css';

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setActiveLanguage } from "react-localize-redux";

import Farwell from '../../commen/Farwell';


class Test extends Component {
  render() {
    let {locale, id} = this.props.match.params
    let { setLang } = this.props

    setLang(locale || 'en')

    return (
      <div className="Test">
        TEST
        <div>
        {locale ? locale : null}
        </div>
        <div>
          {id ? id : null}
        </div>
        <Farwell />
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
        setLang: lang => dispatch(setActiveLanguage(lang))
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Test))
