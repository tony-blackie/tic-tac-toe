import React, { Component } from 'react';
import Square from './Square.jsx';

export default class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
            squares: new Array(9).fill(null),
            xIsNext: true
        };

        this.renderSquare = this.renderSquare.bind(this);
        this.makeActive = this.makeActive.bind(this);
    }

    renderSquare(i) {
        return <Square key={i} value={this.state.squares[i]} makeActive={() => {this.makeActive(i)}} />;
    }

    makeActive(i) {
        let squares = Object.assign({}, this.state.squares);
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({squares: squares, xIsNext: !this.state.xIsNext});
    }

    render() {
        const status = `Next Player: ${this.state.xIsNext ? 'X' : 'O'}`;
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