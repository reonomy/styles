import React from 'react';
import ReactDOM from 'react-dom';
import ReonomyStyles from '@reonomy/styles';

const HelloWorld = () => {
  return (
    <ReonomyStyles fontDirectory="./fonts">
      <main style={{ padding: 150 }}>
        <h1>Hello World, I should be Basier Square</h1>
        <p>Welcome to my world.</p>

        <p>These leader lines should look not broken:</p>
        <article style={{ width: 350, padding: 20, background: 'white' }}>
          <dl className="leader-lines">
            <dt>Lot Area SF</dt>
            <dd>
              <span>20,000 sf</span>
            </dd>
          </dl>
          <dl className="leader-lines">
            <dt>Lot Area Acres</dt>
            <dd>
              <span>0.46 acres</span>
            </dd>
          </dl>
          <dl className="leader-lines">
            <dt>Zoning</dt>
            <dd>0100</dd>
          </dl>
          <dl className="leader-lines">
            <dt>Depth</dt>
            <dd>200 ft</dd>
          </dl>
          <dl className="leader-lines">
            <dt>Frontage</dt>
            <dd>100 ft</dd>
          </dl>
          <dl className="leader-lines">
            <dt>Asset Type</dt>
            <dd style={{ maxWidth: '72%' }}>A line that has just gone too long</dd>
          </dl>
        </article>

        <p>These buttons should be colorful and hoverable:</p>
        <article>
          <button type="button" className="label-style-0">
            Style 0
          </button>
          <button type="button" className="label-style-1">
            Style 1
          </button>
          <button type="button" className="label-style-2">
            Style 2
          </button>
          <button type="button" className="label-style-3">
            Style 3
          </button>
          <button type="button" className="label-style-4">
            Style 4
          </button>
          <button type="button" className="label-style-5">
            Style 5
          </button>
          <button type="button" className="label-style-6">
            Style 6
          </button>
          <button type="button" className="label-style-7">
            Style 7
          </button>
        </article>

        <p>And hey look, a spinning ampersand:</p>
        <div className="icon-spin" style={{ background: 'white', boxShadow: '0 0 5px rgba(0,0,0,0.2)' }}>
          @
        </div>

        <p>MTA icons, for your pleasure:</p>
        <div>
          <span className="subway-icon mta-green">6</span>
          <span className="subway-icon mta-green express">6</span>
          <span className="subway-icon mta-green">4</span>
        </div>
        <div>
          <span className="subway-icon mta-orange ">B</span>
          <span className="subway-icon mta-blue">C</span>
          <span className="subway-icon mta-blue">A</span>
        </div>
        <div>
          <span className="subway-icon mta-purple">7</span>
          <span className="subway-icon mta-purple express">7</span>
          <span className="subway-icon mta-gray">S</span>
        </div>
        <div>
          <span className="subway-icon mta-yellow">N</span>
          <span className="subway-icon mta-yellow">R</span>
          <span className="subway-icon mta-yellow">Q</span>
          <span className="subway-icon mta-red">1</span>
          <span className="subway-icon mta-red">2</span>
          <span className="subway-icon mta-red">3</span>
        </div>
      </main>
    </ReonomyStyles>
  );
};

ReactDOM.render(<HelloWorld />, document.getElementById('app'));
