import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route, NavLink } from 'react-router-dom';
import { getMovies } from '../../ApiCalls/getMovies';
import * as Actions from '../../Actions';
import CardContainer from '../CardContainer/CardContainer';
import './App.css';

class App extends Component {
  async componentDidMount() {
    const movies = await getMovies();
    this.props.retrieveMovies(movies);
  }

  render() {
    return (
      <main className="App">
        <CardContainer />
      </main>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  retrieveMovies: movies => dispatch(Actions.postMovies(movies))
});

export default connect(null, mapDispatchToProps)(App);