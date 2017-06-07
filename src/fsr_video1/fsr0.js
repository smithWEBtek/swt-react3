import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const MOUNT = document.getElementById('root');
const Hello = () => <div>Hello from React!</div>
ReactDOM.render(<Hello />, MOUNT);