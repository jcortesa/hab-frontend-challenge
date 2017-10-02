import axios from 'axios';
import { reset } from 'redux-form';

import {
  FETCH_CATEGORIES,
  NEXT_PAGE,
  PREVIOUS_PAGE,
  RESET_FORM
} from '../actionTypes/app-layout';

export function fetchCategories() {
  return (dispatch) => axios.get(
    'http://localhost:8000/app_dev.php/categories',
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }
  )
  .then((response) => dispatch({
    type: FETCH_CATEGORIES,
    categories: response.data
  }));
}

export function createBudget(values) {
  return (dispatch) => axios.post(
    'http://localhost:8000/app_dev.php/budgets',
    {
      description: values.descripcion,
      category: values.categoria,
      email: values.email,
      phone: values.telefono,
      address: values.direccion,
    },
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }
  ).then(() => {
    dispatch({ type: NEXT_PAGE });
    dispatch(reset('budgetForm'));
  });
}

export function nextPage() {
  return (dispatch) => dispatch({ type: NEXT_PAGE });
}

export function previousPage() {
  return (dispatch) => dispatch({ type: PREVIOUS_PAGE });
}

export function resetForm() {
  return (dispatch) => dispatch({ type: RESET_FORM });
}
