import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Link } from 'react-router';

import Square from './Square.jsx';


export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                App Component
            </div>
        );
    }
}