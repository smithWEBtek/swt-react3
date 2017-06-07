import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const MOUNT = document.getElementById('root');
const Hello = ({name}) => (
	<div>Hello {name}!</div>
)
const names = ['Ned', 'Ted', 'Fred', 'Zed', 'Mary', 'Ned', 'Ted'];


const App = () => (
	// ...1st way:
	// <div className='app'>
	// 	<Hello name={names[0]} />
	// 	<Hello name={names[1]} />
	// 	<Hello name={names[2]} />
	// 	<Hello name={names[3]} />
	// </div>

	// ...2nd way:
	// also shows .map with index for unique keys
	<div className='app'>
		{names.map((name, index) => (
			<Hello 
				name={name} 
				key={name+index} />
			)
		)}
	</div>
)

ReactDOM.render(<App />, MOUNT);
