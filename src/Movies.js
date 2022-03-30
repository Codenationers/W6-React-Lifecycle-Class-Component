import React from 'react';

const Movies = ({ movies, deleteMovie }) => {
	return (
		<div className="movie-list">
			{movies.map((movie) => {
				return (
					<div className="movie" key={movie.id}>
						<div>Title: {movie.title}</div>
						<div>Year: {movie.year}</div>
						<div>Actor: {movie.actor}</div>
						<button
							onClick={() => {
								deleteMovie(movie.id);
							}}>
							Delete movie
						</button>
					</div>
				);
			})}
		</div>
	);
};

export default Movies;
