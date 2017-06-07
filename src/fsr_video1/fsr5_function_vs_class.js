import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const MOUNT = document.getElementById('root');
const { Component } = React;

const Hello = ({name}) => (
	<div>Hello {name}!</div>
)
const names = ['Ned', 'Ted', 'Fred', 'Zed', 'Mary', 'Ned', 'Ted'];

// classical style, vs functional style
class App extends Component {
	render(){
		return (
			<div className='app'>
				{names.map((name, index) => (
					<Hello 
						name={name} 
						key={name+index} />
					)
				)}
			</div>
		)
	}
}

ReactDOM.render(<App />, MOUNT);
