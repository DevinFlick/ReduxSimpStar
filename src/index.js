import React from 'react';
import ReactDOM from 'react-dom';
import API_KEY from '../secrets';
import SearchBar from './components/search_bar';

//Create a new component.
//This component should produce some HTML.
//this is called a functional component as opposed to a class component
const App = () => {
  return (
    <div>
      <SearchBar/>
    </div>
  );
}
//Take this component's generated HTML and render it in the DOM
ReactDOM.render(<App/>, document.querySelector('.container'));

//d
