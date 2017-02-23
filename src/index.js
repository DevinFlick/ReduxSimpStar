import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import API_KEY from '../secrets';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

  YTSearch({key: API_KEY, term: 'surfboards'}, videos => {
      this.setState({ videos });
    });
  }

  render() {
      return (
        <div>
          <SearchBar />
          <VideoList videos={this.state.videos} />
        </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'));


// //Create a new component.
// //This component should produce some HTML.
// //this is called a functional component as opposed to a class component
// const App = () => {
//   return (
//     <div>
//       <SearchBar/>
//     </div>
//   );
// }
// //Take this component's generated HTML and render it in the DOM
// ReactDOM.render(<App/>, document.querySelector('.container'));
//
