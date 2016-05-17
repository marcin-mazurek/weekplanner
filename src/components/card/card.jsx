import React, { Component, PropTypes } from 'react';
import styles from './card.scss';
import IconButton from 'material-ui/IconButton';
import ClockIcon from 'material-ui/svg-icons/device/access-time';
import DoneIcon from 'material-ui/svg-icons/action/done';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import cx from 'classnames';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  getCardStyles() {
    if (this.props.color) {
      return { backgroundColor: this.props.color };
    }
  }

  handleClick() {
    if (this.props.onTouchTap) {
      this.props.onTouchTap();
    }
  }

  isEditMode() {
    return this.props.variant === 'editModeModal';
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

  renderDoneButton() {
    if (!this.isEditMode()) {
      // TODO: provide event handler
      return (
        <IconButton className={styles.doneButton} onTouchTap={event => event.stopPropagation()}>
          <DoneIcon className={styles.doneIcon} />
        </IconButton>
      );
    }
  }

  renderDescription() {
    if (this.props.description) {
      return <p contentEditable={this.isEditMode()} className={styles.description}>{this.props.description}</p>;
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
        defaultChecked={subtask.checked}
        onTouchTap={event => event.stopPropagation()} /> // TODO: this needs to be controlled by React (change to checked prop)
    );
  }

  render() {
    return (
      <Paper zDepth={this.isEditMode() ? 5 : 1}
        className={cx(styles.card, styles[this.props.variant])}
        style={this.getCardStyles()}
        onTouchTap={this.handleClick}>
        {this.renderDoneButton()}
        {this.renderTime()}
        <h3 className={styles.title} contentEditable={this.isEditMode()}>{this.props.title}</h3>
        {this.renderDescription()}
        {this.renderChecklist()}
      </Paper>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['plain', 'editModeModal', 'editModeOriginal']).isRequired,
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
