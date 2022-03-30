import React, { Component } from 'react';

class AddMovie extends Component {
	state = {
		title: '',
		year: '',
		actor: '',
	};
	handleChange = (e) => {
		this.setState({
			...this.state,
			[e.target.id]: e.target.value,
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addMovie(this.state);
		this.setState({
			title: '',
			year: '',
			actor: '',
		});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="title">Title:</label>
					<input
						value={this.state.name}
						type="text"
						id="title"
						onChange={this.handleChange}
					/>
					<label htmlFor="year">Year:</label>
					<input
						value={this.state.year}
						type="text"
						id="year"
						onChange={this.handleChange}
					/>
					<label htmlFor="actor">Actor:</label>
					<input
						value={this.state.actor}
						type="text"
						id="actor"
						onChange={this.handleChange}
					/>
					<button>Submit</button>
				</form>
			</div>
		);
	}
}

export default AddMovie;
