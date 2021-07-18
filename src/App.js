import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { profiles, users, movies } from './Data.js';
import PopularMovies from './MostViewMovies.js';

/*
Display a list of movies where each movie contains a list of users that favorited it.

For detailed instructions, refer to instructions.md.
*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="logo.svg" className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
          <p>Exercise 2 - Passing Data</p>
        </header>
        <main className="App-main">
          <h2>How Most view is Your Favorite Movie?</h2>
          <MostViewMovies profiles={profiles} users={users} movies={movies} />
        </main>
      </div>
    );
  }
}

export default App;