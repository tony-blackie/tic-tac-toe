import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Link } from 'react-router';

import Square from './Square.jsx';
import Board from './Board.jsx';
import Game from './Game.jsx';


export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Game />

        );
    }
}