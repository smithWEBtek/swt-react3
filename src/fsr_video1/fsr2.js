import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const MOUNT = document.getElementById('root');
// const Hello = (props) => <div>Hello {props.name}!</div>
// ReactDOM.render(<Hello name='Brad'/>, MOUNT);


const Hello = ({name}) => (
	<div>Hello {name}!</div>
)
// ReactDOM.render(<Hello name='Bradley'/>, MOUNT);

const name = 'Bradley J';
ReactDOM.render(
	React.createElement(Hello, {name: name}),
	MOUNT
	);

	// 2 elements of the render function
	// spells out what JS sees when we use <Hello name='Bradley' />