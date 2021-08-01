import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

const element = <h1>Hello World</h1>;
// Babel converts above JSX to react components

ReactDOM.render(
    element,
    document.getElementById("root")
    // root is where the whole application lies
    // it is a class in index.html
)
// element is rendered inside the element root
//             /\
// Hello World ||

