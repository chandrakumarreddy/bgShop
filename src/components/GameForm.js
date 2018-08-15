import React, { Component } from "react";
import ReactImageFallback from "react-image-fallback";
import FieldNameValidation from "./FieldNameValidation";

class GameForm extends Component {
	state = {
		data: {
			name: "",
			duration: "",
			players: "",
			price: "",
			description: "",
			featured: true,
			thumbnail: ""
		},
		errors: {}
	};
	formHandler = e => {
		e.preventDefault();
		const errors = this.validate(this.state.data);
		this.setState({ errors });
		if (Object.keys(errors).length === 0) {
			console.log(this.state.data);
		}
	};
	validate(data) {
		const errors = {};
		if (!data.name) errors.name = "This name field can't be empty";
		if (!data.description)
			errors.description = "This description field can't be empty";
		if (!data.thumbnail)
			errors.thumbnail = "This thumbnail field can't be empty";
		if (!data.price) errors.price = "This price field can't be empty";
		if (!data.duration)
			errors.duration = "This duration field can't be empty";
		if (!data.players) errors.players = "This players field can't be empty";
		return errors;
	}
	handleChange = e =>
		this.setState({
			data: {
				...this.state.data,
				[e.target.name]:
					e.target.type === "number"
						? Number(e.target.value, 10)
						: e.target.value
			}
		});
	handleCheckBoxChange = e => {
		this.setState({
			data: { ...this.state.data, [e.target.name]: e.target.checked }
		});
	};
	toggleCheckbox = e => {
		this.state.tags.includes(e._id)
			? this.setState({
					tags: this.state.tags.filter(tag => tag !== e._id)
			  })
			: this.setState({ tags: [...this.state.tags, e._id] });
	};
	handleRadioChange = genre => this.setState({ data: { genre: genre._id } });
	render() {
		const { data, errors } = this.state;
		return (
			<form className="ui form" onSubmit={this.formHandler}>
				<div className="ui grid">
					<div className="twelve wide column">
						<div className={errors.name ? "field error" : "field"}>
							<label>name</label>
							<input
								placeholder="Full Game Title"
								type="text"
								id="name"
								name="name"
								value={data.name}
								onChange={this.handleChange}
							/>
							<FieldNameValidation
								type="error"
								content={errors.name}
							/>
						</div>
						<div
							className={
								errors.description ? "field error" : "field"
							}
						>
							<label>Description</label>
							<textarea
								name="description"
								id="description"
								onChange={this.handleChange}
								value={data.description}
							/>
							<FieldNameValidation
								type="error"
								content={errors.description}
							/>
						</div>
						<ReactImageFallback
							src={data.thumbnail}
							fallbackImage="http://via.placeholder.com/250x250"
							className="image"
							alt="Thumbnail"
						/>
					</div>
				</div>
				<div className="ui grid">
					<div className="twelve wide column">
						<div className="fields">
							<div
								className={
									errors.price ? "field error" : "field"
								}
							>
								<label>Price</label>
								<input
									placeholder="price in $"
									type="number"
									name="price"
									value={data.price}
									onChange={this.handleChange}
								/>
								<FieldNameValidation
									type="error"
									content={errors.price}
								/>
							</div>
							<div
								className={
									errors.duration ? "field error" : "field"
								}
							>
								<label>Duration</label>
								<input
									placeholder="duration in min"
									type="number"
									name="duration"
									value={data.duration}
									onChange={this.handleChange}
								/>
								<FieldNameValidation
									type="error"
									content={errors.duration}
								/>
							</div>
							<div
								className={
									errors.name ? "field error" : "field"
								}
							>
								<label>Players</label>
								<input
									placeholder="Players"
									type="text"
									name="players"
									value={data.players}
									onChange={this.handleChange}
								/>
							</div>
						</div>
						<div className="ui checkbox field">
							<input
								name="featured"
								type="checkbox"
								id="featured"
								checked={data.featured}
								onChange={this.handleCheckBoxChange}
							/>
							<label>Featured?</label>
						</div>
						<div
							className={
								errors.thumbnail ? "field error" : "field"
							}
						>
							<label>Thumbnail</label>
							<input
								type="text"
								id="thumbnail"
								name="thumbnail"
								value={data.thumbnail}
								onChange={this.handleChange}
							/>
							<FieldNameValidation
								type="error"
								content={errors.thumbnail}
							/>
						</div>
						<div className="ui fluid buttons">
							<button className="ui button primary" type="submit">
								create
							</button>
							<div className="or" />
							<a
								className="ui cancel button"
								onClick={this.props.cancel}
							>
								cancel
							</a>
						</div>
					</div>
				</div>
			</form>
		);
	}
}

export default GameForm;
