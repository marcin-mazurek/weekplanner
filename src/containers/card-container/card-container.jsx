import React, { Component } from 'react';
import Card from '../../components/card/card';
import CardModal from '../../components/card-modal/card-modal';
import styles from './card-container.scss';
import transitions from './card-container-transitions.scss';
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

  componentWillUnmount() {
    this.removeEscapeKeyEventHandler();
  }

  leaveEditMode(event) {
    event && event.stopPropagation();
    this.setState({ inEditMode: false }, () => this.removeEscapeKeyEventHandler());
  }

  initializeEscapeKeyEventHandler() {
    this.escapeKeyEventHandler = document.addEventListener('keydown', event => {
      if (event.keyCode == 27) {
        this.leaveEditMode();
      }
    });
  }

  removeEscapeKeyEventHandler() {
    if (this.escapeKeyEventHandler) {
      document.removeEventListener('keydown', this.escapeKeyEventHandler);
      this.escapeKeyEventHandler = undefined;
    }
  }

  renderCard() {
    if (this.state.inEditMode) {
      return <Card {...this.props} variant="edited" />;
    } else {
      return <Card {...this.props} onTouchTap={this.enterEditMode} variant="plain" />;
    }
  }

  renderEditCard() {
    if (this.state.inEditMode) {
      return (
        <div className={styles.modalContainer} onTouchTap={this.leaveEditMode} key="modalContainer">
          <CardModal {...this.props} onTouchTap={event => event.stopPropagation()} variant="editModeModal" />
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
