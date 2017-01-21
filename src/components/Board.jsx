import React, { Component } from 'react';
import Square from './Square.jsx';

export default class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
            squares: new Array(9).fill(null),
            xIsNext: true,
            winner: null
        };

        this.renderSquare = this.renderSquare.bind(this);
        this.makeActive = this.makeActive.bind(this);
        this.calculateWinner = this.calculateWinner.bind(this);
    }

    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    renderSquare(i) {
        return <Square key={i} value={this.state.squares[i]} makeActive={() => {this.makeActive(i)}} />;
    }

    makeActive(i) {
        let squares = Object.assign({}, this.state.squares);
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState(
            {
                squares: squares,
                xIsNext: !this.state.xIsNext,
                winner: this.calculateWinner(squares)
            }
        );
    }

    render() {
        let status;
        if (!this.state.winner) {
            status = `Next Player: ${this.state.xIsNext ? 'X' : 'O'}`;
        } else {
            status = `Winner is ${this.state.winner}`;
        }
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}