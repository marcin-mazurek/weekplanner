import React, { Component } from 'react';
import { times } from 'lodash';
import styles from './week.scss';
import Column, { minimalColumnWidth } from './components/column/column';

export default class Week extends Component {
  componentWillMount() {
    this.calculateNumberOfColumns();
  }

  componentWillUnmount() {
    window.removeEventListener(this.resizeEventHandler);
  }

  componentDidMount() {
    this.resizeEventHandler = window.addEventListener('resize', () => {
      this.calculateNumberOfColumns();
    });
  }

  calculateNumberOfColumns() {
    const numberOfDisplayedColumns = Math.floor(window.innerWidth / minimalColumnWidth);

    this.setState({
      numberOfDisplayedColumns
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.numberOfDisplayedColumns !== nextState.numberOfDisplayedColumns;
  }

  render() {
    return (
      <div className={styles.container}>
        {times(this.state.numberOfDisplayedColumns, index => (
          <Column key={index} daysSinceToday={index} />
        ))}
      </div>
    );
  }
}
