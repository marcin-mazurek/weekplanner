import React from 'react';
import DeleteIcon from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import Checkbox from 'components/checkbox/checkbox';
import TextField from 'material-ui/TextField';
import DragButton from 'components/buttons/drag-button/drag-button';
import SubtaskInput from '../subtask-input/subtask-input';
import styles from './subtask.scss';

export default function Subtask(subtask) {
  return (
    <div className={styles.container}>
      <DragButton />
      <Checkbox checked={subtask.checked} className={styles.checkbox} />
      <SubtaskInput value={subtask.description} />
      <IconButton onTouchTap={event => event.stopPropagation()}
        className={styles.delete}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
}

// TODO: add propTypes
