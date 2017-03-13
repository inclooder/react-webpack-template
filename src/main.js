import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import './main.scss';

 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Counter),
    document.getElementById('mount')
  );
});
