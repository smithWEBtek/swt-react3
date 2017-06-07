import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const MOUNT = document.getElementById('root');
// const Hello = (props) => <div>Hello {props.name}!</div>
// ReactDOM.render(<Hello name='Brad'/>, MOUNT);

const Hello = ({name}) => <div>Hello {name}!</div>
ReactDOM.render(<Hello name='Bradley'/>, MOUNT);