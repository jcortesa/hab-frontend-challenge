import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AppLayout from '../components/AppLayout';

import * as appLayoutActions from '../actionCreators/app-layout';

class App extends Component {
  static propTypes = {
    fetchCategories: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    return <AppLayout {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  categories: state.appLayout.categories,
  formPage: state.appLayout.formPage,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    ...appLayoutActions,
  }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
