import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

const dates = [
  'Lo antes posible',
  'de 1 a 3 meses',
  'más de 3 meses',
];

const EstimatedDateSelectorField = ({
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
        <option value="">Seleccionar una fecha</option>
        {dates.map((date) =>
          <option value={date} key={date}>
            {date}
          </option>
        )}
      </select>
      {touched && error && <span className={styles.error}><i className="fa fa-exclamation-circle" aria-hidden="true" />&nbsp;{error}</span>}
    </div>
  </div>
);

EstimatedDateSelectorField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  meta: PropTypes.object,
};

export default EstimatedDateSelectorField;
