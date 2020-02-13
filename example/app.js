/* eslint react/jsx-filename-extension: 0 */

import React from 'react';
import ReactDOM from 'react-dom';
import asdf from '@reonomy/styles';

console.log(asdf);


const HelloWorld = () => {
  return (
    <div className='hello-world'>
      <h1>Hello World</h1>
      <p>Welcome to my world</p>
    </div>
  )
};

ReactDOM.render(<HelloWorld />, document.getElementById('app'));