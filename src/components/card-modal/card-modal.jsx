import React, { Component, PropTypes } from 'react';
import Actions from './actions/actions';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import ClockIcon from 'material-ui/svg-icons/device/access-time';
import Checklist from './checklist/checklist';
import styles from './card-modal.scss';

export default class CardModal extends Component {
  constructor(props) {
    super(props);
    this.handleTouchTap = this.handleTouchTap.bind(this);
  }

  getCardStyles() {
    if (this.props.color) {
      return { backgroundColor: this.props.color };
    }
  }

  handleTouchTap(event) {
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

  render() {
    return (
      <Paper zDepth={5}
        className={styles.card}
        style={this.getCardStyles()}
        onTouchTap={this.handleTouchTap}>
        {this.renderTime()}
        <TextField hintText="Card title"
          defaultValue={this.props.title}
          className={styles.title}
          fullWidth={true}
          spellCheck={false} />
        <TextField hintText="Description (multiline)"
          defaultValue={this.props.description}
          multiLine={true}
          fullWidth={true}
          className={styles.description}
          spellCheck={false} />
        <Checklist elements={this.props.checklist} />
        <Actions />
      </Paper>
    );
  }
}

CardModal.propTypes = {
  title: PropTypes.string.isRequired,
  onTouchTap: PropTypes.func,
  description: PropTypes.string,
  time: PropTypes.string,
  checklist: PropTypes.array.isRequired,
  color: PropTypes.string
};
