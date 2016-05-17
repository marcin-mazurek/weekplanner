import EditableCard from './editable-card/editable-card';
import { times } from 'lodash';
import React from 'react';

const sentences = [
  'Lorem ipsum dolor sit amet.',
  'Aenean commodo ligula eget dolor.',
  'Aenean massa.',
  'Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.',
  'Vestibulum facilisis, purus nec pulvinar iaculis.',
  'Ligula mi congue nunc, vitae euismod ligula urna in dolor.'
]

const colors = [
  '#FFFFFF',
  '#FFFFFF',
  '#EF9A9A',
  '#FFF59D',
  '#FFCC80',
];

const randomNumber = (max, min = 0) => min + Math.round(Math.random() * (max-min));
const randomElement = (array) => array[randomNumber(array.length - 1)];

const getText = () => {
  const text = [];

  times(randomNumber(7), () => {
    text.push(randomElement(sentences));
  });

  return text.join(' ');
};

const getTime = () => randomNumber(1) ? null : `${randomNumber(23)}:${randomNumber(5)}0`;

const getChecklist = () => {
  if (randomNumber(1)) {
    return null;
  }

  const checklist = [];

  times(randomNumber(5), index => {
    checklist.push({
      id: randomNumber(10000000).toString(),
      checked: !!randomNumber(1),
      description: 'Subtask ' + (index + 1)
    });
  });

  return checklist;
}

export default () => <EditableCard description={getText()} checklist={getChecklist()} color={randomElement(colors)} time={getTime()} title={randomElement(sentences)} />;
