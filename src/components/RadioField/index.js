import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

const RadioField = ({
  input,
  label,
  className,
  meta: { touched, error }
}) => (
  <div className="form-group">
    <input {...input} placeholder={label} type="radio" className={className} id={label} />
    <label htmlFor={label}>{label}</label>
    {touched && error && <span className={styles.error}><i className="fa fa-exclamation-circle" aria-hidden="true" />&nbsp;{error}</span>}
  </div>
);

RadioField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  className: PropTypes.string,
  meta: PropTypes.object,
};

export default RadioField;
