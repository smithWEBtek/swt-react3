import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const MOUNT = document.querySelector('#root');
const { Component } = React
const names = ['Harry', 'Mary', 'Larry', 'Perry']

class Guest extends Component {
	render() {
		const { name }  = this.props

		return(
			<div className='guest'>
				<input type='checkbox' />
				{ name }
			</div>
		)
	}
}

const GuestBookApp = () => (
	<div className = 'guestbook'>
		Hello from GuestBookApp
	</div>
)

ReactDOM.render(
	<GuestBookApp />,
	MOUNT
);