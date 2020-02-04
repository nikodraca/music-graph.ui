import React from 'react';
import { useHistory } from 'react-router-dom';

import GenreGraph from '../components/genreGraph.component';

const GenreGraphPage = () => {
  const history = useHistory();

  const spotifyAccessToken = localStorage.getItem('spotifyAccessToken');
  const spotifyUserId = localStorage.getItem('spotifyUserId');

  if (!spotifyAccessToken) {
    history.push('/auth');
  }

  return <GenreGraph />;
};

export default GenreGraphPage;
