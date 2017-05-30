import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

const dog = React.createElement('p', {}, "woof");
const title = React.createElement('h1', {}, <div>'My First React Code', 'asdf', {dog}</div>);

ReactDOM.render(
	<div>
	  <h1>Hello, world!</h1>
  	{title}
	</div>,
	document.getElementById('app')
);
 
const paragraph = React.createElement('p', {}, 'Writing some more HTML. Cool stuff!');
const container = React.createElement('div', {}, [title, paragraph]);
 
ReactDOM.render(
  container,
  document.getElementById('app')
);
