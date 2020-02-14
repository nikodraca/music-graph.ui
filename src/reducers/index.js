import Immutable from 'immutable';
import { createReducer } from '../utils/createReducer';
import storeSpotifyResponse from './storeSpotifyResponse.reducer';
import showError from './showError.reducer';

const initialState = Immutable.Map();

export default createReducer(initialState, {
  STORE_SPOTIFY_RESPONSE: storeSpotifyResponse,
  SHOW_ERROR: showError
});
