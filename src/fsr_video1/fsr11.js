import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import './index.css';

const MOUNT = document.querySelector('#root');
const { Component } = React
const names = ['Harry', 'Mary', 'Larry', 'Perry']

class Guest extends Component {
	constructor(props){
		super(props);

		this.state = {
			rsvpd: false
		}
	}

	render() {
		const { name }  = this.props
		const { rsvpd } = this.state

		return(
			<div 
				className={'guest' 
				${rsvpd} && 'active'}>
					<input type='checkbox' 
				/>
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