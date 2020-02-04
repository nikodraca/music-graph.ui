import React from 'react';
import Graph from 'react-graph-vis';

import { generateGenreGraph } from '../utils/graph';

const GenreGraph = () => {
  const genreGraph = generateGenreGraph();

  const options = {
    layout: {
      hierarchical: false
    },
    edges: {
      color: '#000000'
    },
    height: '789px',
    nodes: {
      shape: 'box',
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

  return <Graph graph={genreGraph} options={options} />;
};

export default GenreGraph;
