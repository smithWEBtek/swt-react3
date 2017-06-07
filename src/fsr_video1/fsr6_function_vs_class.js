import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const MOUNT = document.getElementById('root');
const { Component } = React;

const Hello = (props) => (
	<div>Hello {props.name}!, your ID is: {props.id} and today is: {props.today}
	</div>
)
const names = ['Ned', 'Ted', 'Fred', 'Zed', 'Mary', 'Ned', 'Ted'];
const today = Date(); 

// showing unique id passed as prop
class App extends Component {
	render(){
		return (
			<div className='app'>
				{names.map((name, index) => (
					<Hello 
						name={name} 
						key={name+index}
						id={name +'_'+ index} 
						today={today.substring(0,3)} />
					)
				)}
			</div>
		)
	}
}

ReactDOM.render(<App />, MOUNT);
