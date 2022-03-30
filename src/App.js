import React, { Component } from 'react';
import Movies from './Movies';
import AddMovie from './AddMovie';
import './App.css';

class App extends Component {
	state = {
		movies: [
			{ title: 'Die Hard', year: 1988, actor: 'Bruce Willis', id: 1 },
			{ title: 'Rocky', year: 1976, actor: 'Sylvester Stallone', id: 2 },
			{ title: 'Titanic', year: 1997, actor: 'Leonardo Dicaprio', id: 3 },
		],
	};
	addMovie = (movie) => {
		movie.id = Math.random();
		let movies = [...this.state.movies, movie];
		this.setState({
			movies: movies,
		});
	};
	deleteMovie = (id) => {
		// console.log(id);
		let newMovies = this.state.movies.filter((movie) => {
			return movie.id !== id;
		});
		this.setState({
			movies: newMovies,
		});
	};
	componentDidMount() {
		console.log('component mounted');
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('component updated');
		console.log(prevProps, prevState);
	}

	render() {
		return (
			<div className="App">
				<h1>React LifeCycle - Class Component</h1>
				<Movies movies={this.state.movies} deleteMovie={this.deleteMovie} />
				<AddMovie addMovie={this.addMovie} />
			</div>
		);
	}
}

export default App;
