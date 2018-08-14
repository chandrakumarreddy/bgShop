import React, { Component } from "react";

class GameForm extends Component {
	state = {
		name: ""
	};
	formHandler = e => {
		e.preventDefault();
		console.log(this.state);
	};
	handleChange = e => this.setState({ [e.target.name]: e.target.value });
	render() {
		return (
			<form className="ui form" onSubmit={this.formHandler}>
				<div className="field">
					<label>name</label>
					<input
						placeholder="Full Game Title"
						type="text"
						id="name"
						name="name"
						value={this.state.name}
						onChange={this.handleChange}
					/>
				</div>
				<div className="field">
					<label>Description</label>
					<textarea
						rows="4"
						name="description"
						id="description"
						onChange={this.handleChange}
						value={this.state.description}
					/>
				</div>
				<button className="ui button" type="submit">
					Submit
				</button>
			</form>
		);
	}
}

export default GameForm;
