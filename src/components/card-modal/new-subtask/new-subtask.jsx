import React from 'react';
import PlusIcon from 'material-ui/svg-icons/content/add';
import SubtaskInput from '../subtask-input/subtask-input';
import styles from './new-subtask.scss';

export default function NewSubtask() {
  return (
    <div className={styles.container}>
      <PlusIcon className={styles.plusIcon} />
      <SubtaskInput placeholder="Add new task..." />
    </div>
  );
}

// TODO: add propTypes
