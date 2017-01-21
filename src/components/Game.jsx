import React, { Component } from 'react';

import Board from './Board.jsx';

export default class Game extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return(
            <div className="game">
                <div className="game-board">
                    <Board calculateWinner={this.calculateWinner} />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}