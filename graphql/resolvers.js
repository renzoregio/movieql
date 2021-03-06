import { getMovies, getById, addMovie, deleteMovie } from "./db";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id),
  },
  Mutation: {
    addMovie: (_, { name, rating }) => addMovie(name, rating),
    deleteMovie: (_, { id }) => deleteMovie(id),
  },
};

export default resolvers;
