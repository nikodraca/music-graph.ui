import Immutable from 'immutable';

export default (state, actionPayload) => {
  state = state.set('errorMessage', Immutable.fromJS(actionPayload));
  return state;
};
