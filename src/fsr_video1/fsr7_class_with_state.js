import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const MOUNT = document.getElementById('root');
const { Component } = React;

const names = ['Ned', 'Ted', 'Fred', 'Zed', 'Mary', 'Ned', 'Ted'];
 
class Guest extends Component {
	constructor(props) {
		super(props);

		this.state = {
			rsvpd: false
		}
	}
	render(){
		const { name } = this.props
		const { rsvpd } = this.state

		return(
			<div 
				className={`guest ${rsvpd && 'active'}`}>
					<input type='checkbox'/>
					{ name }
			</div>
		)
	}
}

const GuestbookApp = () => (
	<div className='guestbook'>
		{names.map((name, index) => (
			<Guest
				key={name+index}
				name={name} />
		))}
 	</div>
)

ReactDOM.render(<GuestbookApp />, MOUNT)