import React, { Component } from 'react';

const Square = (props) => {
    return (
        <button
            className="square"
            onClick={() => {props.makeActive(props.value)}}
        >
            {props.value}
        </button>
    );
};

export default Square;