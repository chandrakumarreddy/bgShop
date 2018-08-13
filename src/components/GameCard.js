import React from "react";
import PropTypes from "prop-types";
import Price from "./Price";

const GameCard = ({ game }) => (
	<div className="ui card">
		<div className="image">
			<Price cents={game.price} />
			<img src={game.thumbnail} alt="Game Card" />
		</div>
		<div className="content">
			<a href="#" className="header">
				{game.name}
			</a>
			<div className="meta">
				<i className="icon users" />
				{game.players}
				&nbsp;
				<i className="icon wait" />
				{game.duration}
				min.
			</div>
		</div>
	</div>
);

GameCard.propTypes = {
	game: PropTypes.shape({
		price: PropTypes.number.isRequired,
		thumbnail: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		players: PropTypes.string.isRequired,
		duration: PropTypes.number.isRequired
	}).isRequired
};

export default GameCard;
