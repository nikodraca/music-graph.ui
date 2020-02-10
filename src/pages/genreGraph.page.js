import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import GenreGraph from '../components/genreGraph.component';
import actions from '../actions';

const GenreGraphPage = ({ actions, artistGraph }) => {
  const history = useHistory();

  const spotifyAccessToken = localStorage.getItem('spotifyAccessToken');

  if (!spotifyAccessToken) {
    history.push('/auth');
  }

  useEffect(() => {
    actions.fetchSpotifyData(spotifyAccessToken);
  }, [spotifyAccessToken, actions]);

  if (!artistGraph) return 'Loading...';
  return <GenreGraph artistGraph={artistGraph} />;
};

const mapStateToProps = state => {
  return {
    accessToken: state.get('accessToken'),
    artistGraph: state.get('artistGraph'),
    user: state.get('user')
  };
}; //eslint-disable-line
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
}); //eslint-disable-line

export default connect(mapStateToProps, mapDispatchToProps)(GenreGraphPage);
