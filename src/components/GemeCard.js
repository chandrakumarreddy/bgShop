import React from "react";

const GameCard = () => (
	<div className="ui card">
		<div className="image">
			<span className="ui green ribbon label">$32.99</span>
			<img
				src="https://cf.geekdo-images.com/thumb/img/icWvI9MBWZYO_4IZ6_Mfj5n-XEs=/fit-in/200x150/pic3000000.png"
				alt="Game Card"
			/>
		</div>
		<div class="content">
			<a href="#" class="header">
				Quadrapolis
			</a>
			<div class="meta">
				<i class="icon users" />
				2-1&nbsp;
				<i class="icon wait" />
				60min.
			</div>
		</div>
	</div>
);

export default GameCard;
