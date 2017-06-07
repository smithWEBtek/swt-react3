import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const MOUNT = document.getElementById('root');
const { Component } = React

const names = ['Ned', 'Ted', 'Fred', 'Zed', 'Mary', 'Ned', 'Ted']

const Guest = ({ name, rsvpd, onRSVP }) => (
	<div className={`guest ${rsvpd && 'active'}`}>
		<input
			onChange={onRSVP}
			type='checkbox' />
	</div>
)

class GuestbookApp extends Component {
	constructor(props) {
		super(props)
		const { names } = this.props
		/**
		* Convert a list of names to an object
		* with their name and rspv value
		**/
		const guests = names.reduce((sum, name) => ({
			...sum, //total list so far
			[name]: false, // current name and their rsvp value
		}), {})

		this.state = { guests }
	}

	onRSVP = (name, evt) => {
		const { guests } = this.state
		guests[name] = !guests[name] //flip value
		this.setState({ guests })
	}

	render() {
		const { guests } = this.state
		return (
		<div className='guestbook'>
			{Object.keys(guests).map(name => (
				<Guest
					key={name}
					onRSVP={this.onRSVP.bind(this, name)}
					rsvpd={guests[name]}
					name={name} />
			))}
		</div>
		)
	}

ReactDOM.render(<GuestbookApp names={names} />, MOUNT);