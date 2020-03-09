import Immutable from 'immutable';

export default (state, actionPayload) => {
  // Clear state
  if (!actionPayload) {
    state = state.set('artistGraph', Immutable.fromJS(null));
    state = state.set('user', Immutable.fromJS(null));
  } else {
    // handle error with vis.js and null images
    actionPayload.artistGraph.nodes = actionPayload.artistGraph.nodes.map(node => {
      return { ...node, image: node.image || '' };
    });

    state = state.set('artistGraph', Immutable.fromJS(actionPayload.artistGraph));
    state = state.set('user', Immutable.fromJS(actionPayload.user));
  }

  return state;
};
