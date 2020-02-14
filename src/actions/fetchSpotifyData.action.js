import * as rp from 'request-promise';

export default ({ spotifyAccessToken, spotifyUserId }) => {
  return async dispatch => {
    dispatch({
      type: 'SHOW_ERROR',
      payload: null
    });

    const { REACT_APP_API_ENDPOINT } = process.env;

    try {
      const response = await rp({
        method: 'GET',
        uri: `${REACT_APP_API_ENDPOINT}/spotify/user`,
        qs: {
          spotifyUserId
        },
        json: true,
        headers: {
          access_token: spotifyAccessToken
        },
        resolveWithFullResponse: true
      });

      localStorage.setItem('spotifyUserId', response.body.user.id);

      return dispatch({
        type: 'STORE_SPOTIFY_RESPONSE',
        payload: response.body
      });
    } catch (err) {
      return dispatch({
        type: 'SHOW_ERROR',
        payload: err.error.message
      });
    }
  };
};
