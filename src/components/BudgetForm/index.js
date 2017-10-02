import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BudgetFormFirstPage from './BudgetFormFirstPage';
import BudgetFormSecondPage from './BudgetFormSecondPage';
import BudgetFormThirdPage from './BudgetFormThirdPage';

class BudgetForm extends Component {
  render() {
    return (
      <div>
        {
          this.props.formPage === 1 &&
          <BudgetFormFirstPage onSubmit={() => this.props.nextPage()} />
        }
        {this.props.formPage === 2 &&
          <BudgetFormSecondPage
            previousPage={() => this.props.previousPage()}
            onSubmit={() => this.props.nextPage()}
            categories={this.props.categories}
          />}
        {this.props.formPage === 3 &&
          <BudgetFormThirdPage
            previousPage={() => this.props.previousPage()}
            onSubmit={this.props.onSubmit}
          />}
      </div>
    )
  }
}

BudgetForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default BudgetForm
