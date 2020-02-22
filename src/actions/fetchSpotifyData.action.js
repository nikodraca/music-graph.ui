import * as rp from 'request-promise';

export default ({ spotifyAccessToken, spotifyUserId, isAuthFlow }) => {
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

      /**
       * If user is making requests as part of auth flow, store their ID
       * the auth response from Spotify does not include user ID so we don't know until this response comes back
       */
      if (isAuthFlow) {
        localStorage.setItem('spotifyUserId', response.body.user.id);
      }

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
