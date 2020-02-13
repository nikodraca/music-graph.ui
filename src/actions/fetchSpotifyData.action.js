import * as rp from 'request-promise';

export default ({ spotifyAccessToken, spotifyUserId }) => {
  return async dispatch => {
    const { REACT_APP_API_ENDPOINT } = process.env;

    const response = await rp({
      method: 'GET',
      uri: `${REACT_APP_API_ENDPOINT}/spotify/user`,
      qs: {
        spotifyUserId
      },
      json: true,
      headers: {
        access_token: spotifyAccessToken
      }
    });

    return dispatch({
      type: 'STORE_SPOTIFY_RESPONSE',
      payload: response
    });
  };
};
