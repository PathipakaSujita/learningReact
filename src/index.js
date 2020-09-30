import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Toggle from './components/button.js';
import LoginControl from './components/loginControl.js';
import WarningControl from './components/warningControl.js';
import { Blog, POSTS } from './components/blog.js';
import { Form } from './components/form.js';
import {
  ProductSearchTable,
  PRODUCTS
} from './mini-projects/productSearcher/productSearchTable.js';
import Game from './mini-projects/ticTacToe/ticTacGame.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <>
    <Game /> <br />
    <Form /> <br />
    <Toggle /> <br />
    <LoginControl /> <br />
    <ProductSearchTable products={PRODUCTS} /> <br />
    <WarningControl /> <br />
    <Blog posts={POSTS} /> <br />
  </>,
  document.getElementById('root')
);

// ReactDOM.render(<h1>Button ON OFF </h1>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
