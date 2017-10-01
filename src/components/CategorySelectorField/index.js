import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

const CategorySelectorField = ({
  categories,
  input,
  label,
  type,
  className,
  meta: { touched, error }
}) => (
  <div className="form-group">
    <label>{label}</label>
    <div>
      <select {...input}>
        <option value="">Seleccionar una categoría…</option>
        {categories.map((category) =>
          <option value={category.id} key={category.id}>
            {category.name}
          </option>
        )}
      </select>
      {touched && error && <span className={styles.error}><i className="fa fa-exclamation-circle" aria-hidden="true" />&nbsp;{error}</span>}
    </div>
  </div>
);

CategorySelectorField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  meta: PropTypes.object,
};

export default CategorySelectorField;
