import React from 'react';
import ReactDOM from 'react-dom';
import API_KEY from '../secrets';

//Create a new component.
//This component should produce some HTML.
const App = () => {
  return <div>hi</div>;
}
//Take this component's generated HTML and render it in the DOM
ReactDOM.render(<App/>, document.querySelector('.container'));

//d
