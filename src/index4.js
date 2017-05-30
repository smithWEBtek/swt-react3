import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
 
 

const Button = React.createClass({
  render() {
    return React.createElement('button', {}, 'Click me!');
  }
});
 
const nestedButtons = React.createElement('div', {}, [
  React.createElement(Button),
  React.createElement(Button),
]);


ReactDOM.render(
	nestedButtons,
	document.getElementById('app')
);

