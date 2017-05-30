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

const ShoppingList = React.createClass({
	render(){
		return React.createElement('ul', {}, 
			[
			React.createElement('li', {}, 'Bananas'),
			React.createElement('li', {}, 'Vanilla ice cream'),
			React.createElement('li', {}, 'Chocolate'),
		]);
	}
});

ReactDOM.render(
	<div className='main'>
		<Button />
		<ShoppingList />
	</div>,
	document.getElementById('app')
);

