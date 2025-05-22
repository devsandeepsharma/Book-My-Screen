export const filterMoviesByCategory = (movies, category) => {
    if (!category) return movies;
    return movies.filter(movie => movie.category === category);
}

export const findMovie = (movies, id) => {
    return movies.find(movie => movie.id === id);
}