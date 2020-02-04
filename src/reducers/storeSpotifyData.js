import Immutable from 'immutable';

export default (state, actionPayload) => {
  state = state.set('accessToken', Immutable.fromJS(actionPayload.accessToken));
  return state;
};
