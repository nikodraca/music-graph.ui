import Immutable from 'immutable';

export default (state, actionPayload) => {
  // Clear state
  if (!actionPayload) {
    state = state.set('artistGraph', Immutable.fromJS(null));
    state = state.set('user', Immutable.fromJS(null));
  } else {
    state = state.set('artistGraph', Immutable.fromJS(actionPayload.artistGraph));
    state = state.set('user', Immutable.fromJS(actionPayload.user));
  }

  return state;
};
