import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

const FormField = ({
  input,
  label,
  type,
  className,
  meta: { touched, error }
}) => (
  <div className="form-group">
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} className={className} />
      {touched && error && <span className={styles.error}><i className="fa fa-exclamation-circle" aria-hidden="true" />&nbsp;{error}</span>}
    </div>
  </div>
);

FormField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  meta: PropTypes.object,
};

export default FormField;
