import React from "react";
import PropTypes from "prop-types";
import Price from "./Price";
import Featured from "./Featured";

class GameCard extends React.Component {
	state = {
		confirmDelete: false
	};
	showConfirmation = () => this.setState({ confirmDelete: true });
	hideConfirmation = () => this.setState({ confirmDelete: false });
	render() {
		const { game, toggleFeatured, editGame, deleteGame } = this.props;
		return (
			<div className="ui card">
				<div className="image">
					<Price cents={game.price} />
					<Featured
						featured={game.featured}
						toggleFeatured={toggleFeatured}
						gameId={game._id}
					/>
					<img src={game.thumbnail} alt="Game Card" />
				</div>
				<div className="content">
					<a className="header">{game.name}</a>
					<br />
					<div className="meta">
						<i className="icon users" />
						{game.players}
						&nbsp;
						<i className="icon wait" />
						{game.duration}
						min.
						<span className="right floated eye">
							<i className="eye icon" />
						</span>
					</div>
				</div>
				<div className="extra content">
					{this.state.confirmDelete ? (
						<div className="ui two buttons">
							<a
								className="ui red button basic"
								onClick={() => deleteGame(game)}
							>
								<i className="icon check" />
								Yes
							</a>
							<a
								className="ui gey button basic"
								onClick={this.hideConfirmation}
							>
								<i className="icon close" />
								No
							</a>
						</div>
					) : (
						<div className="ui two buttons">
							<a
								className="ui green button basic"
								onClick={() => editGame(game)}
							>
								<i className="icon edit" />
							</a>
							<a
								className="ui red button basic"
								onClick={this.showConfirmation}
							>
								<i className="icon trash" />
							</a>
						</div>
					)}
				</div>
			</div>
		);
	}
}

GameCard.propTypes = {
	game: PropTypes.shape({
		price: PropTypes.number.isRequired,
		thumbnail: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		players: PropTypes.string.isRequired,
		duration: PropTypes.number.isRequired,
		featured: PropTypes.bool.isRequired
	}).isRequired
};

export default GameCard;
