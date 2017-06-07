import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import './index.css';

const MOUNT = document.querySelector('#root');
const { Component } = React
const Hello = ({ name }) => (<div>Hello {name}</div>)                                                        
const names = ['Harry', 'Mary', 'Larry', 'Perry']

class App extends Component {
  render() {                          
		return (
			<div className='app'>
				{names.map(name => (
					<Hello
						key={name}
						name={name} />)
				)}
			</div>
		)
	}
}

ReactDOM.render(<App />, MOUNT);