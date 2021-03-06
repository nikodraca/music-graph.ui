import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

import actions from '../actions';

const queryString = require('query-string');

const authUser = () => {
  var clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  var redirectUri = process.env.REACT_APP_REDIRECT_URI;
  var scope = 'user-read-private user-read-email user-top-read user-follow-read';
  var url = `https://accounts.spotify.com/authorize?response_type=token&client_id=${encodeURIComponent(
    clientId
  )}&scope=${encodeURIComponent(scope)}&redirect_uri=${encodeURIComponent(redirectUri)}`;

  window.location = url;
};

const AuthPage = ({ actions }) => {
  let spotifyAccessToken;
  let authHash = window.location.hash.substring(1);

  // check if this is auth route
  if (authHash) {
    let authHashObj = queryString.parse(authHash);
    // store to local storage
    spotifyAccessToken = authHashObj.access_token;
    localStorage.setItem('spotifyAccessToken', spotifyAccessToken);
  } else if (localStorage.getItem('spotifyAccessToken')) {
    spotifyAccessToken = localStorage.getItem('spotifyAccessToken');
  }

  if (!spotifyAccessToken)
    return (
      <div>
        <button onClick={authUser}>Auth Me</button>
      </div>
    );

  actions.fetchSpotifyData({ spotifyAccessToken, isAuthFlow: true });

  return (
    <div>
      <Redirect to="/graph">Click here to continue</Redirect>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    accessToken: state.get('accessToken'),
    userSpotifyResponse: state.get('userSpotifyResponse')
  };
}; //eslint-disable-line
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
}); //eslint-disable-line

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
