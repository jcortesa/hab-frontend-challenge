import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BudgetFormFirstPage from './BudgetFormFirstPage';
import BudgetFormSecondPage from './BudgetFormSecondPage';
import BudgetFormThirdPage from './BudgetFormThirdPage';

class BudgetForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    return (
      <div>
        {
          this.state.page === 1 &&
          <BudgetFormFirstPage onSubmit={() => this.nextPage()} />
        }
        {this.state.page === 2 &&
          <BudgetFormSecondPage
            previousPage={() => this.previousPage()}
            onSubmit={() => this.nextPage()}
            categories={this.props.categories}
          />}
        {this.state.page === 3 &&
          <BudgetFormThirdPage
            previousPage={() => this.previousPage()}
            onClickSubmit={(values) => console.log(values)}
          />}
      </div>
    )
  }
}

BudgetForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default BudgetForm
