import React from 'react';
import ThreeDots from 'material-ui/svg-icons/navigation/more-vert';
import styles from './drag-button.scss';

export default function DragButton() {
  return (
    <div className={styles.drag}>
      <ThreeDots />
      <ThreeDots />
    </div>
  );
}
