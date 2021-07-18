
import React, { Component } from 'react';
import UserList from './UserList.js';

class MostViewMovies extends Component {
  render() {
    const { profiles, users, movies } = this.props;
    const moviesArr = Object.values(movies);
    return (
      <div className="MostViewMovies-container">
        {moviesArr.map(movie => (
          <div key={movie.id} className="MostViewMovies-cell">
            <h3>{movie.name}</h3>
            <UserList movieID={movie.id} users={users} profiles={profiles} />
          </div>
        ))}
      </div>
    );
  }
}

export default MostViewMovies;