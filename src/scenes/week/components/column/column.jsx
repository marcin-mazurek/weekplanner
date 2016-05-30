import React, { Component } from 'react';
import CardContainer from '../../../../containers/card-container/card-container';
import { times } from 'lodash';
import moment from 'moment';
import AddIcon from 'material-ui/svg-icons/content/add-circle-outline';
import IconButton from 'material-ui/IconButton';
import styles from './column.scss';

export default class Column extends Component {
  render() {
    return (
      <div className={styles.column}>
        <div className={styles.header}>
          <div className={styles.headerText}>
            {this.props.date.format('dddd DD.MM')}
          </div>
          <div>
            { /* TODO: add event handler */ }
            <IconButton>
              <AddIcon className={styles.addIcon} />
            </IconButton>
          </div>
        </div>
        <div className={styles.content}>
          {this.props.cards.map(card => (
            <CardContainer {...card} key={card.id} />
          ))}
        </div>
      </div>
    );
  }
}

// TODO: specify propTypes

export const minimalColumnWidth = parseInt(styles.minimalColumnWidth);
