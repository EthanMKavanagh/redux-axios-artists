// App.js

import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ArtistList from './../ArtistList/ArtistList.js';
import {connect} from 'react-redux';
import {Route, Link, HashRouter as Router} from 'react-router-dom';
import AddArtist from '../AddArtist/AddArtist';

class App extends Component {
  // DOM is ready
  componentDidMount() { // react Component method
    this.refreshArtists();
  }

  refreshArtists = () => {
    // just like $.ajax()
    axios({
      method: 'GET',
      url: '/artist'
    }).then((response) => {
      console.log(response);
      // response.data will be the array of artists
      this.setState({
        artists: response.data,
      });
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Famous Artists</h1>

              <nav>
              <main>
                <div>
                  <span><Link to="/addArtist">Add Artist</Link></span>
                  <span><Link to="/allArtists">All Artists</Link></span>
                </div>
              </main>
            </nav>

          </header>
          <br/>


          <main>
            <Route exact path = '/allArtists'>
              <ArtistList
                refreshArtists={this.refreshArtists}
                artistList={this.props.artists}
              />
            </Route>

            <Route exact path = '/addArtist'>
              <AddArtist 
                refreshArtists={this.refreshArtists}
              />
            </Route>
          </main>
        </div>
      </Router>
    );
  }
}

const mapStateToProp = (reduxState) => ({
  artists: reduxState.artists
});
export default connect(mapStateToProp)(App);
