import React from "react";
import PropTypes from "prop-types";

const FieldNameValidation = ({ content, type }) => (
	<span style={{ color: type === "error" ? "#9A38f3" : "#6597a7" }}>
		{content}
	</span>
);

FieldNameValidation.propTypes = {
	type: PropTypes.oneOf(["error", "info"]),
	content: PropTypes.string
};

FieldNameValidation.defaultProps = {
	content: ""
};

export default FieldNameValidation;
