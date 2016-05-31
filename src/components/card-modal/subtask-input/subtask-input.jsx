import React, { PropTypes as P } from 'react';
import styles from './subtask-input.scss';

export default function SubtaskInput({ value, placeholder }) {
  return (
    <input defaultValue={value} // TODO: this needs to be controled by React
      placeholder={placeholder}
      className={styles.input} />
  )
}

SubtaskInput.propTypes = {
  value: P.string,
  placeholder: P.string
};
