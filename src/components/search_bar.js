// this import syntax is is just the same as doing:
//const Component = React.Component;
import React, { Component } from 'react';

//class components, using ES6 class feature, are used when you want a component to have some kind of internal record keeping
//by extending the React.Component class we capture all the functionality that inheritly comes with react
//"class SearchBar extends React.Component" { becomes class SearchBar extends Component { thanks to our import syntax
class SearchBar extends Component {
//render is a method on the React.Component that must return some JSX or an error will throw
  render(){
    //onChange is a react specific event keyword, react docs have more info
    return <input onChange={this.onInputChange}/>
    //ES6 syntax allows for the event handler to be ditched and an arrow function to be used instead:
    //return <input onChange={(event) => console.log(event.target.value)}/>
    //if you have a single argument you can drop the parameter/args pararentheses as well
    //return <input onChange={event => console.log(event.target.value)}/>
  }

//this is the event handler for the onChange above
  onInputChange(event){
    console.log(event.target.value);
  }
}

//functional component
// const SearchBar = () => {
//   return <input/>
// };

export default SearchBar
