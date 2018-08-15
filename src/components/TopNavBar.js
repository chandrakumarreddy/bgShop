import React from "react";
import PropTypes from "prop-types";

const TopNavBar = ({ showForm }) => (
	<div className="ui secondary pointing menu">
		<a className="active item">BgShop</a>
		<a className="item" onClick={showForm}>
			Add image
		</a>
	</div>
);

TopNavBar.propTypes = {
	showForm: PropTypes.func.isRequired
};

export default TopNavBar;
