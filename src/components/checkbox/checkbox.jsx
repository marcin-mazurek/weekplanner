import React, { PropTypes as P } from 'react';
import MaterialCheckbox from 'material-ui/Checkbox';
import styles from './checkbox.scss';
import cx from 'classnames';

export default function Checkbox({ label, checked, className, onTouchTap }) {
  return (
    <MaterialCheckbox label={label}
      className={cx(styles.checkbox, className)}
      defaultChecked={checked}
      onTouchTap={onTouchTap} />
  );
}

Checkbox.propTypes = {
  label: P.string,
  checked: P.bool,
  className: P.string,
  onTouchTap: P.func
};
