import React from "react";
import _orderBy from "lodash/orderBy";
import GameList from "./GameList";
import GameForm from "./GameForm";
import TopNavBar from "./TopNavBar";

var games = [
	{
		_id: 1,
		name: "Quadrapolis",
		price: 3299,
		thumbnail:
			"https://cf.geekdo-images.com/thumb/img/icWvI9MBWZYO_4IZ6_Mfj5n-XEs=/fit-in/200x150/pic3000000.png",
		players: "2 - 1",
		duration: 60,
		featured: false
	},
	{
		_id: 2,
		name: "Mysterium",
		price: 4032,
		thumbnail:
			"https://cf.geekdo-images.com/opengraph/img/9A06_TMyHJnSPXOlXezyj0apQfI=/fit-in/1200x630/pic2601683.jpg",
		players: "2 - 1",
		duration: 120,
		featured: true
	},
	{
		_id: 3,
		name: "Scrabble",
		price: 6008,
		thumbnail:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTpJKNpFuU5JImNXqhQKGR45H2g0Ic8jM6nPtq4awOfTkQexZh",
		players: "2 - 1",
		duration: 120,
		featured: false
	},
	{
		_id: 4,
		name: "Splendor",
		price: 808,
		thumbnail:
			"https://cf.geekdo-images.com/itemrep/img/_zfZUvJ93rSgIfytSgg-lo2jcPA=/fit-in/246x300/pic3195118.jpg",
		players: "2 - 1",
		duration: 110,
		featured: true
	}
];

class App extends React.Component {
	state = {
		games: [],
		showForm: false,
		selected: {}
	};
	componentDidMount() {
		this.setState({
			games: this.sortGames(games)
		});
	}
	sortGames(games) {
		return _orderBy(games, ["featured", "name"], ["desc", "asc"]);
	}
	showForm = () => this.setState({ showForm: true, selected: {} });

	hideForm = () => this.setState({ showForm: false, selected: {} });

	submit = game =>
		this.setState({
			games: this.sortGames([
				...this.state.games,
				{ ...game, _id: this.state.games.length + 1 }
			])
		});

	saveGame = game => (game._id ? this.updateGame(game) : this.submit(game));

	updateGame = game =>
		this.setState({
			games: this.state.games.map(
				item => (item._id === game._id ? game : item)
			),
			showForm: false
		});

	editGame = game => this.setState({ selected: game, showForm: true });

	toggleFeatured = gameId =>
		this.setState({
			games: this.sortGames(
				this.state.games.map(
					game =>
						game._id === gameId
							? { ...game, featured: !game.featured }
							: game
				)
			)
		});
	deleteGame = game =>
		this.setState({
			games: this.state.games.filter(item => item._id !== game._id)
		});
	render() {
		const numberOfColumns = this.state.showForm ? "ten" : "sixteen";
		return (
			<div className="ui container">
				<TopNavBar showForm={this.showForm} />
				<div className="ui stackable grid">
					{this.state.showForm && (
						<div className="six wide column">
							<GameForm
								cancel={this.hideForm}
								submit={this.saveGame}
								game={this.state.selected}
							/>
						</div>
					)}
					<div className={`${numberOfColumns} wide column`}>
						<GameList
							games={this.state.games}
							toggleFeatured={this.toggleFeatured}
							editGame={this.editGame}
							deleteGame={this.deleteGame}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
