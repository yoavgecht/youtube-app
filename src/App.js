import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

const API_KEY= 'AIzaSyBD9ka1gJ-ZynFR9Pwe4hE6Au0hCjOCO5c';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {videos: [], selectedVideo: null, term: ''};
    this.YTSearch(this.state.term);
  }

  YTSearch(term) {
      YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({ videos: videos, selectedVideo: videos[0] })
    });
  }
  
  onVideoSelectHandler = (selectedVideo) => {
    this.setState({ selectedVideo })
  }
  onInputChangeHandler = (term) => {
    this.YTSearch({term})
    this.setState({term})
  }

  render() {
    const videoSearch = _.debounce((term) => {this.onInputChangeHandler(term)}, 300)

    return (
      <div>
        <SearchBar onInputChange={videoSearch} term={this.state.term}/>
        <VideoDetail video={this.state.videos[0]} selectVideo={this.state.selectedVideo}/> 
        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelectHandler}/>
      </div>
    );
  }
}

export default App;
