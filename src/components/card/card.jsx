import React, { Component, PropTypes } from 'react';
import styles from './card.scss';
import IconButton from 'material-ui/IconButton';
import ClockIcon from 'material-ui/svg-icons/device/access-time';
import DoneIcon from 'material-ui/svg-icons/action/done';
import Paper from 'material-ui/Paper';
import Checkbox from 'components/checkbox/checkbox';
import cx from 'classnames';

export default class Card extends Component {
  getCardStyles() {
    if (this.props.color) {
      return { backgroundColor: this.props.color };
    }
  }

  handleClick(event) {
    if (this.props.onTouchTap) {
      this.props.onTouchTap(event);
    }
  }

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
        checked={subtask.checked}
        onTouchTap={event => event.stopPropagation()}
        className={styles.checkbox}
        key={subtask.id} />
    );
  }

  render() {
    return (
      <Paper className={cx(styles.card, styles[this.props.variant])}
        style={this.getCardStyles()}
        onTouchTap={event => this.handleClick(event)}>
        { /* TODO: provide event handler */ }
        <IconButton className={styles.doneButton} onTouchTap={event => event.stopPropagation()}>
          <DoneIcon className={styles.doneIcon} />
        </IconButton>
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
  variant: PropTypes.oneOf(['plain', 'edited']).isRequired,
  onTouchTap: PropTypes.func,
  description: PropTypes.string,
  time: PropTypes.string,
  checklist: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired
  })),
  color: PropTypes.string
};
