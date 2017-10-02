import {
  FETCH_CATEGORIES,
  NEXT_PAGE,
  PREVIOUS_PAGE,
  RESET_FORM
} from '../actionTypes/app-layout';

const initialState = {
  categories: [],
  formPage: 1,
};

function modal(state = initialState, action) {
  switch (action.type) {
  case FETCH_CATEGORIES:
    return {
      ...state,
      categories: action.categories,
    };
  case NEXT_PAGE:
    return {
      ...state,
      formPage: state.formPage + 1
    };
  case PREVIOUS_PAGE:
    return {
      ...state,
      formPage: state.formPage - 1
    };
  case RESET_FORM:
  case 'RESET':
    return { ...initialState };
  default: return state;
  }
}

export default modal;
