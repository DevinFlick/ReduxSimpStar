import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import API_KEY from '../secrets';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedVideo: null,
      videos: []
    };
    this.videoSearch('fresh water aquarium');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term}, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 500);
    
      return (
        <div>
          <SearchBar
            onSearchTermChange={term => this.videoSearch(term)}
          />
          <VideoDetail
            video={this.state.selectedVideo}
          />
          <VideoList
            onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
            videos={this.state.videos}
          />
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
