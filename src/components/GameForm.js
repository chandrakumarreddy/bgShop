import React, { Component } from "react";
import ReactImageFallback from "react-image-fallback";

class GameForm extends Component {
	state = {
		name: "",
		duration: "",
		players: "",
		price: "",
		description: "",
		featured: true,
		thumbnail: ""
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
	handleCheckBoxChange = e => {
		this.setState({ [e.target.name]: e.target.checked });
	};
	toggleCheckbox = e => {
		this.state.tags.includes(e._id)
			? this.setState({
					tags: this.state.tags.filter(tag => tag !== e._id)
			  })
			: this.setState({ tags: [...this.state.tags, e._id] });
	};
	handleRadioChange = genre => this.setState({ genre: genre._id });
	render() {
		return (
			<form className="ui form" onSubmit={this.formHandler}>
				<div className="ui grid">
					<div className="twelve wide column">
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
						<div className="ui checkbox field">
							<input
								name="featured"
								type="checkbox"
								id="featured"
								checked={this.state.featured}
								onChange={this.handleCheckBoxChange}
							/>
							<label>Featured?</label>
						</div>
						<div className="field">
							<label>Thumbnail</label>
							<input
								type="text"
								id="thumbnail"
								name="thumbnail"
								value={this.state.thumbnail}
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<div className="four wide column">
						<ReactImageFallback
							src={this.state.thumbnail}
							fallbackImage="http://via.placeholder.com/250x250"
							className="image"
							alt="Thumbnail"
						/>
					</div>
				</div>
				<div className="field">
					<button className="ui button" type="submit">
						Submit
					</button>
				</div>
			</form>
		);
	}
}

export default GameForm;
