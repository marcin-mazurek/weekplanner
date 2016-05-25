import { times } from 'lodash';
import React from 'react';
import moment from 'moment';

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

const generateDescription = () => {
  const text = [];

  times(randomNumber(7), () => {
    text.push(randomElement(sentences));
  });

  return text.join(' ');
};

const generateTime = () => randomNumber(1) ? null : `${randomNumber(23)}:${randomNumber(5)}0`;

const generateId = () => randomNumber(10000000).toString();

const generateChecklist = () => {
  if (randomNumber(1)) {
    return null;
  }

  const checklist = [];

  times(randomNumber(5), index => {
    checklist.push({
      id: generateId(),
      checked: !!randomNumber(1),
      description: 'Subtask ' + (index + 1)
    });
  });

  return checklist;
}

function generateCard() {
  return {
    id: generateId(),
    description: generateDescription(),
    checklist: generateChecklist(),
    color: randomElement(colors),
    time: generateTime(),
    title: randomElement(sentences)
  };
}

function generateDay(daysSinceToday) {
  const cards = [];
  times(randomNumber(6), () => cards.push(generateCard()));

  return {
    id: generateId(),
    date: moment().add(daysSinceToday, 'days'),
    cards
  };
}

export default function generateFakeModel(numberOfDays) {
  const days = [];
  times(numberOfDays, day => days.push(generateDay(day)));
  return days;
}
