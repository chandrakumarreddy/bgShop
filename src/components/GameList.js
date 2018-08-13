import React from "react";
import PropTypes from "prop-types";
import GameCard from "./GameCard";
import Message from "./Message";

const GameList = ({ games }) => (
	<div className="ui four cards">
		{games.length === 0 ? (
			<Message
				header="There are no games in tour store!"
				content="You should add some,dont you think?"
				type="error"
			/>
		) : (
			games.map(game => <GameCard key={game._id} game={game} />)
		)}
	</div>
);

GameList.propTypes = {
	games: PropTypes.arrayOf(PropTypes.object).isRequired
};

GameList.defaultProps = {
	games: []
};

export default GameList;
