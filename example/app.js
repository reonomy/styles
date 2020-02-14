import React from 'react';
import ReactDOM from 'react-dom';
import ReonomyStyles from '@reonomy/styles';

const HelloWorld = () => {
  return (
    <ReonomyStyles fontDirectory="./fonts">
      <main style={{ padding: 150 }}>
        <h1>Hello World, I should be Basier Square</h1>
        <p>Welcome to my world.</p>
      </main>
    </ReonomyStyles>
  )
};

ReactDOM.render(<HelloWorld />, document.getElementById('app'));