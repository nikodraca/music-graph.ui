import { uniq } from 'lodash';
import topArtists from '../data/top_artists_medium.json';

const generateGenreGraph = () => {
  const networkGraph = {
    nodes: [],
    edges: []
  };

  const genreGraph = {};
  topArtists.items.forEach(artist => {
    artist.genres.forEach(genre => {
      if (!genreGraph[genre]) genreGraph[genre] = artist.genres.filter(g => g !== genre);
      else genreGraph[genre] = uniq([...genreGraph[genre], ...artist.genres.filter(g => g !== genre)]);
    });
  });

  Object.keys(genreGraph).forEach(genre => {
    networkGraph.nodes.push({
      id: genre,
      label: genre
    });

    genreGraph[genre].forEach(relatedGenre => {
      networkGraph.edges.push({
        from: genre,
        to: relatedGenre
      });
    });
  });

  return networkGraph;
};

export { generateGenreGraph };
