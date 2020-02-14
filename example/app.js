/* eslint react/jsx-filename-extension: 0 */

import React from 'react';
import ReactDOM from 'react-dom';
import ReonomyStyles from '@reonomy/styles';

const HelloWorld = () => {
  return (
    <ReonomyStyles fontDirectory="./fonts">
      <main>
        <h1>Hello World</h1>
        <p>Welcome to my world</p>
      </main>
    </ReonomyStyles>
  )
};

ReactDOM.render(<HelloWorld />, document.getElementById('app'));