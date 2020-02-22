export default () => {
  return async dispatch => {
    localStorage.removeItem('spotifyAccessToken');
    localStorage.removeItem('spotifyUserId');

    dispatch({
      type: 'STORE_SPOTIFY_RESPONSE',
      payload: null
    });
  };
};
