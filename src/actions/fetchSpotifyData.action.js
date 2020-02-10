import * as rp from 'request-promise';

export default spotifyAccessToken => {
  return async (dispatch, getState) => {
    const { REACT_APP_API_ENDPOINT } = process.env;

    const response = await rp({
      method: 'GET',
      uri: `${REACT_APP_API_ENDPOINT}/spotify/user`,
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
