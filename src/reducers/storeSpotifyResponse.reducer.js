import Immutable from 'immutable';

export default (state, actionPayload) => {
  state = state.set('artistGraph', Immutable.fromJS(actionPayload.artistGraph));
  state = state.set('user', Immutable.fromJS(actionPayload.user));
  return state;
};
