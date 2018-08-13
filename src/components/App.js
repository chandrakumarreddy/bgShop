import React from "react";
import _orderBy from "lodash/orderBy";
import GameList from "./GameList";

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
		games: []
	};
	componentDidMount() {
		this.setState({
			games: _orderBy(games, ["featured", "name"], ["desc", "asc"])
		});
	}
	render() {
		return (
			<div className="ui container">
				<GameList games={this.state.games} />
			</div>
		);
	}
}

export default App;