import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

const CategorySelectorField = ({
  categories,
  input,
  label,
  meta: { touched, error }
}) => (
  <div className="form-group">
    <label>{label}</label>
    <div>
      <select {...input}>
        <option value="">Seleccionar una categoría…</option>
        {categories.map((category) =>
          <optgroup label={category.name} key={category.id}>
            {category.children.map((childCategory) =>
              <option value={childCategory.id} key={childCategory.id}>
                {childCategory.name}
              </option>
            )}
          </optgroup>
        )}
      </select>
      {
        touched && error &&
        <span className={styles.error}>
          <i className="fa fa-exclamation-circle" aria-hidden="true" />
          &nbsp;{error}
        </span>
      }
    </div>
  </div>
);

CategorySelectorField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.object,
};

export default CategorySelectorField;
