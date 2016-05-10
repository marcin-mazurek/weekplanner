import React, { Component } from 'react';
import styles from './card.scss';
import Paper from 'material-ui/Paper';
import { times } from 'lodash';

export default class Card extends Component {
  getText() {
    const numberOfSentences = Math.ceil(Math.random() * 7);

    const sentences = [
      'Lorem ipsum dolor sit amet.',
      'Aenean commodo ligula eget dolor.',
      'Aenean massa.',
      'Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.',
      'Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor.',
    ]

    const text = [];

    times(numberOfSentences, () => {
      const i = Math.floor(Math.random() * sentences.length);
      text.push(sentences[i]);
    })

    return text.join(' ');
  }

  render() {
    return (
      <div className={styles.card}>
        <Paper zDepth={1}>
          { /* TODO: fake data */ }
          {this.getText()}
        </Paper>
      </div>
    );
  }
}
