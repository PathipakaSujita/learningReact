import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Toggle2 from './components/toggle.js';
import Toggle from './components/button.js';
import LoginControl from './components/loginControl.js';
import WarningControl from './components/warningControl.js';
import Blog from './components/blog.js';
import { FormInput, FormText, DropDown } from './components/form.js';
import {
  ProductSearchTable,
  SearchInput,
  ProductTable,
  ProductCategoryRow,
  ProductRow,
  PRODUCTS
} from './mini-projects/productSearcher/productSearchTable.js';
import * as serviceWorker from './serviceWorker';

const posts = [
  { id: 1, title: 'Hello World', content: 'Welcome to React' },
  { id: 2, title: 'Introduction', content: 'npx create-react-app appName' }
];

ReactDOM.render(
  <>
    <ProductSearchTable products={PRODUCTS} />
  </>,
  document.getElementById('root')
);

// ReactDOM.render(<h1>Button ON OFF </h1>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
