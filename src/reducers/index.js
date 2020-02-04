import Immutable from 'immutable';
import { createReducer } from '../utils/createReducer';
import storeSpotifyData from './storeSpotifyData';

const initialState = Immutable.Map();

export default createReducer(initialState, {
  STORE_SPOTIFY_DATA: storeSpotifyData
});
