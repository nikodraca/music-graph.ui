import Immutable from 'immutable';
import { createReducer } from '../utils/createReducer';
import storeSpotifyResponse from './storeSpotifyResponse';

const initialState = Immutable.Map();

export default createReducer(initialState, {
  STORE_SPOTIFY_RESPONSE: storeSpotifyResponse
});
