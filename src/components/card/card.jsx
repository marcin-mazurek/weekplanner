import React, { Component, PropTypes } from 'react';
import styles from './card.scss';
import IconButton from 'material-ui/IconButton';
import ClockIcon from 'material-ui/svg-icons/device/access-time';
import Paper from 'material-ui/Paper';

export default class Card extends Component {
  renderTime() {
    if (this.props.time) {
      return (
        <time className={styles.time}>
          <ClockIcon className={styles.timeIcon} />
          {this.props.time}
        </time>
      );
    }
  }

  renderDescription() {
    if (this.props.description) {
      return <p className={styles.description}>{this.props.description}</p>;
    }
  }

  getCardStyles() {
    if (this.props.color) {
      return { backgroundColor: this.props.color };
    }
  }

  render() {
    return (
      <Paper className={styles.card} style={this.getCardStyles()}>
        {this.renderTime()}
        <h3 className={styles.title}>{this.props.title}</h3>
        {this.renderDescription()}
      </Paper>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  time: PropTypes.string,
  checklist: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired
  })),
  color: PropTypes.string
};
