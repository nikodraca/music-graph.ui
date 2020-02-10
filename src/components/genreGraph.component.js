import React from 'react';
import Graph from 'react-graph-vis';

const GenreGraph = ({ artistGraph }) => {
  const options = {
    layout: {
      hierarchical: false,
      improvedLayout: true
    },
    edges: {
      color: '#000000',
      arrows: {
        to: false,
        from: false
      }
    },
    height: '789px',
    nodes: {
      shape: 'circularImage',
      font: {
        size: 14,
        color: '#3f3f3f',
        face: 'helvetica'
      },
      borderWidth: 2,
      color: {
        background: '#d7d7f3',
        border: '#3030a9'
      }
    }
  };

  console.log(artistGraph.toJS());

  return <Graph graph={artistGraph.toJS()} options={options} />;
};

export default GenreGraph;
