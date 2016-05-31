import React, { PropTypes as P } from 'react';
import Subtask from '../subtask/subtask';
import NewSubtask from '../new-subtask/new-subtask';
import styles from './checklist.scss';

export default function Checklist({ elements }) {
  return (
    <div>
      <h3 className={styles.header}>Checklist</h3>
      {elements.map(subtask => <Subtask key={subtask.id} {...subtask} />)}
      <NewSubtask />
    </div>
  );
}

Checklist.propTypes = {
  elements: P.arrayOf(P.shape({
    id: P.string.isRequired,
    checked: P.bool.isRequired,
    description: P.string.isRequired
  })).isRequired
};
