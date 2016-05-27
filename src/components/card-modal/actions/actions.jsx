import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import ClockIcon from 'material-ui/svg-icons/device/access-time';
import DoneIcon from 'material-ui/svg-icons/action/done';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import ColorIcon from 'material-ui/svg-icons/action/invert-colors';
import RepeatIcon from 'material-ui/svg-icons/av/repeat';
import styles from './actions.scss';

export default class Actions extends Component {
  render() {
    // TODO: provide event handlers
    return (
      <div className={styles.actions}>
        <IconButton tooltip="Add reminder" onTouchTap={event => event.stopPropagation()}>
          <ClockIcon />
        </IconButton>
        <IconButton tooltip="Change color" onTouchTap={event => event.stopPropagation()}>
          <ColorIcon />
        </IconButton>
        <IconButton tooltip="Set repeat rules" onTouchTap={event => event.stopPropagation()}>
          <RepeatIcon />
        </IconButton>
        <IconButton tooltip="Delete" onTouchTap={event => event.stopPropagation()}>
          <DeleteIcon />
        </IconButton>
        <IconButton tooltip="Mark as done" onTouchTap={event => event.stopPropagation()}>
          <DoneIcon />
        </IconButton>
      </div>
    );
  }
}

// TODO: specify propTypes
