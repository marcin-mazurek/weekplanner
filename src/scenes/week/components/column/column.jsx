import React, { Component } from 'react';
import { times } from 'lodash';
import moment from 'moment';
import AddIcon from 'material-ui/svg-icons/content/add-circle-outline';
import IconButton from 'material-ui/IconButton';
import styles from './column.scss';
import { lightBlue700 } from 'material-ui/styles/colors';

const minimalColumnWidth = 240;

export default class Column extends Component {
  render() {
    return (
      <div className={styles.column} style={{ minWidth: minimalColumnWidth }}>
        <div className={styles.header}>
          <div className={styles.headerText}>
            { /* TODO: fake data */ }
            {moment().add(this.props.daysSinceToday, 'days').format('dddd DD.MM')}
          </div>
          <div>
            <IconButton>
              <AddIcon color={lightBlue700} />
            </IconButton>
          </div>
        </div>
        <div className={styles.content}>
          Some content here...
        </div>
      </div>
    );
  }
}
