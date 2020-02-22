import React from 'react';
import Graph from 'react-graph-vis';

import './vis.css';

const GenreGraph = ({ artistGraph }) => {
  const options = {
    layout: {
      hierarchical: false,
      improvedLayout: true
    },
    edges: {
      color: { color: '#E0E0E2', highlight: 'black' },
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
        face: 'Muli'
      },
      borderWidth: 3,
      borderWidthSelected: 3,
      color: {
        background: '#d7d7f3',
        border: 'transparent',
        highlight: {
          border: 'black'
        }
      }
    }
  };

  return <Graph graph={artistGraph.toJS()} options={options} />;
};

export default GenreGraph;
