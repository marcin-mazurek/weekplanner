import React, { Component } from 'react';
import { times } from 'lodash';
import styles from './week.scss';
import Column, { minimalColumnWidth } from './components/column/column';
import generateFakeModel from './utils/generate-fake-model';

export default class Week extends Component {
  componentWillMount() {
    this.state = {
      days: generateFakeModel(this.getNumberOfColumnsToDisplay())
    };
  }

  componentWillUnmount() {
    window.removeEventListener(this.resizeEventHandler);
  }

  componentDidMount() {
    this.resizeEventHandler = window.addEventListener('resize', () => {
      const colsToDisplay = this.getNumberOfColumnsToDisplay();

      if (colsToDisplay !== this.state.days.length) {
        this.setState({
          days: generateFakeModel(colsToDisplay)
        });
      }
    });
  }

  getNumberOfColumnsToDisplay() {
    return Math.floor(window.innerWidth / minimalColumnWidth);
  }

  render() {
    return (
      <div className={styles.container}>
        {this.state.days.map((day, index) => (
          <Column {...day} key={index} />
        ))}
      </div>
    );
  }
}
