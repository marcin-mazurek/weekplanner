import React, { Component } from 'react';
import { times } from 'lodash';
import styles from './week.scss';
import Column from './components/column/column';

export default class Week extends Component {
  render() {
    return (
      <div className={styles.container}>
        {times(5, index => (
          <Column key={index} daysSinceToday={index} />
        ))}
      </div>
    );
  }
}
