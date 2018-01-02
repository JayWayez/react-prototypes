import React, { Component } from "react";
import Movie from "./movie";
import axios from "axios";

class MoviesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }
  render() {
    console.log(this.state);
    const movieList = this.state.movies.map((movieInfo, index) => {
      return <Movie info={movieInfo} key={index} />;
    });

    return (
      <div>
        {movieList}
      </div>
    );
  }
  componentWillMount() {
    const ITUNES_URL =
      "http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json";
    axios.get(ITUNES_URL).then(resp => {
      console.log("RESP:", resp.data.feed.entry);
      this.setState({
        movies: resp.data.feed.entry
      });
    });
  }
}

export default MoviesContainer;
