import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

const TextAreaField = ({
  input,
  label,
  className,
  meta: { touched, error }
}) => (
  <div className="form-group">
    <label>{label}</label>
    <div>
      <textArea
        {...input}
        placeholder={label}
        className={className}
      />
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

TextAreaField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  meta: PropTypes.object,
};

export default TextAreaField;
