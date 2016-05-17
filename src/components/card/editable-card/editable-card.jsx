import React, { Component } from 'react';
import Card from '../card';
import styles from './editable-card.scss';
import transitions from './editable-card-transitions.scss';
import ReactDOM from 'react-dom';
import CSSTransitionGroup from 'react-addons-css-transition-group';

export default class EditableCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inEditMode: false
    };
    this.leaveEditMode = this.leaveEditMode.bind(this);
    this.enterEditMode = this.enterEditMode.bind(this);
  }

  enterEditMode(event) {
    event && event.stopPropagation();
    this.setState({ inEditMode: true }, () => this.initializeEscapeKeyEventHandler());
  }

  leaveEditMode(event) {
    event && event.stopPropagation();
    this.removeEscapeKeyEventHandler();
    this.setState({ inEditMode: false });
  }

  initializeEscapeKeyEventHandler() {
    this.escapeKeyEventHandler = document.addEventListener('keydown', event => {
      if (event.keyCode == 27) {
        this.leaveEditMode();
      }
    });
  }

  removeEscapeKeyEventHandler() {
    document.removeEventListener('keydown', this.escapeKeyEventHandler);
  }

  renderCard() {
    if (this.state.inEditMode) {
      return <Card {...this.props} variant="editModeOriginal" />;
    } else {
      return <Card {...this.props} onTouchTap={this.enterEditMode} variant="plain" />;
    }
  }

  renderEditCard() {
    if (this.state.inEditMode) {
      return (
        <div className={styles.modalContainer} onTouchTap={this.leaveEditMode} key="modalContainer">
          <Card {...this.props} onTouchTap={event => event.stopPropagation()} variant="editModeModal" />
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderCard()}
        <CSSTransitionGroup transitionName={transitions}
          transitionAppear={true}
          transitionAppearTimeout={150}
          transitionEnterTimeout={150}
          transitionLeaveTimeout={150}>
          {this.renderEditCard()}
        </CSSTransitionGroup>
      </div>
    );
  }
}
