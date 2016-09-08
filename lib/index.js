import React from 'react';
import { render } from 'react-dom';

import App from './components/app';

const listItems = [
  'This is a pretty neat list',
  'The CSS is cool too!',
  'I bet this pattern is pretty clean and DRY',
  'Look into my eyes',
  'You are getting sleepy',
  'Now you are promoting Dan',
  'You are getting sleepier',
  'All of the devs get promotions to senior',
  'And every time you see Anthony',
  'You say \'nice hat\' even if he isn\'t wearing one',
  'and insist he is when he argues',
  'good',
  'now on the count of 3 you will wake up',
  '3..',
  '2..',
  '1!'
];

const root = document.getElementById('root');
render(<App listItems={listItems} />, root);
