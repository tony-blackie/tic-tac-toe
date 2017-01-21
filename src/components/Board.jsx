import React, { Component } from 'react';
import Square from './Square.jsx';

export default class Board extends Component {
    constructor(props) {
        super(props);

        this.renderSquare = this.renderSquare.bind(this);
        this.makeActive = this.makeActive.bind(this);
    }

    makeActive(i) {
        this.props.makeActive(i);
    }

    renderSquare(i) {
        return <Square key={i} value={this.props.squares[i]} makeActive={() => {this.makeActive(i)}} />;
    }

    render() {
        let status;
        if (!this.props.winner) {
            status = `Next Player: ${this.props.xIsNext ? 'X' : 'O'}`;
        } else {
            status = `Winner is ${this.props.winner}`;
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