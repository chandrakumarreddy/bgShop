import React from "react";
import PropTypes from "prop-types";

const TopNavBar = ({ showForm }) => (
	<div className="ui secondary pointing menu">
		<a className="active item">BGShop</a>
		<a className="item" onClick={showForm}>
			<i class="icon plus" />
			Add Game to shop
		</a>
	</div>
);

TopNavBar.propTypes = {
	showForm: PropTypes.func.isRequired
};

export default TopNavBar;
