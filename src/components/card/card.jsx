import React, { Component, PropTypes } from 'react';
import styles from './card.scss';
import IconButton from 'material-ui/IconButton';
import ClockIcon from 'material-ui/svg-icons/device/access-time';
import DoneIcon from 'material-ui/svg-icons/action/done';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';

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

  renderDoneButton() {
    // TODO: provide event handler
    return (
      <IconButton className={styles.doneButton}>
        <DoneIcon className={styles.doneIcon} />
      </IconButton>
    );
  }

  renderDescription() {
    if (this.props.description) {
      return <p className={styles.description}>{this.props.description}</p>;
    }
  }

  renderChecklist() {
    if (this.props.checklist && this.props.checklist.length) {
      return (
        <div className={styles.checklist}>
          {this.props.checklist.map(this.renderSubtask)}
        </div>
      );
    }
  }

  renderSubtask(subtask) {
    return (
      <Checkbox label={subtask.description}
        className={styles.checkbox}
        defaultChecked={subtask.checked} /> // TODO: this needs to be controlled by React (change to checked prop)
    );
  }

  getCardStyles() {
    if (this.props.color) {
      return { backgroundColor: this.props.color };
    }
  }

  render() {
    return (
      <Paper className={styles.card} style={this.getCardStyles()}>
        {this.renderDoneButton()}
        {this.renderTime()}
        <h3 className={styles.title}>{this.props.title}</h3>
        {this.renderDescription()}
        {this.renderChecklist()}
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
