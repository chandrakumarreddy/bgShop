import React, { Component } from "react";

class GameForm extends Component {
	state = {
		name: "",
		duration: "",
		players: "",
		price: "",
		description: ""
	};
	formHandler = e => {
		e.preventDefault();
		console.log(this.state);
	};
	handleChange = e =>
		this.setState({
			[e.target.name]:
				e.target.type === "number"
					? Number(e.target.value, 10)
					: e.target.value
		});
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
				<div className="fields">
					<div className="field">
						<label>Price</label>
						<input
							placeholder="price in $"
							type="number"
							name="price"
							value={this.state.price}
							onChange={this.handleChange}
						/>
					</div>
					<div className="field">
						<label>Duration</label>
						<input
							placeholder="duration in min"
							type="number"
							name="duration"
							value={this.state.duration}
							onChange={this.handleChange}
						/>
					</div>
					<div className="field">
						<label>Players</label>
						<input
							placeholder="Players"
							type="text"
							name="players"
							value={this.state.players}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<button className="ui button" type="submit">
					Submit
				</button>
			</form>
		);
	}
}

export default GameForm;
