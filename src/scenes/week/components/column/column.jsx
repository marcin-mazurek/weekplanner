import React, { Component } from 'react';
import { times } from 'lodash';
import moment from 'moment';
import CardWithFakeData from 'components/card/card-with-fake-data';
import AddIcon from 'material-ui/svg-icons/content/add-circle-outline';
import IconButton from 'material-ui/IconButton';
import styles from './column.scss';

export default class Column extends Component {
  render() {
    return (
      <div className={styles.column}>
        <div className={styles.header}>
          <div className={styles.headerText}>
            { /* TODO: fake data */ }
            {moment().add(this.props.daysSinceToday, 'days').format('dddd DD.MM')}
          </div>
          <div>
            { /* TODO: add event handler */ }
            <IconButton>
              <AddIcon className={styles.addIcon} />
            </IconButton>
          </div>
        </div>
        <div className={styles.content}>
          { /* TODO: fake data */ }
          {times(Math.floor(Math.random() * 6), index => <CardWithFakeData key={index} />)}
        </div>
      </div>
    );
  }
}

export const minimalColumnWidth = parseInt(styles.minimalColumnWidth);
