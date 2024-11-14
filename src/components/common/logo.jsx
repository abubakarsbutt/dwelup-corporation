import React from "react";
import { Link } from "react-router-dom";

import INFO from "../../data/user";

import "./styles/logo.css";

const Logo = (props) => {
	let { width, link, src } = props;

	if (link === undefined) {
		link = true;
	}

	const imageElement = (
		<img
			alt="logo"
			width={width}
			className="logo"
			src={src || INFO.main.logo}
		/>
	);

	return (
		<React.Fragment>
			{link ? <Link to="/">{imageElement}</Link> : imageElement}
		</React.Fragment>
	);
};

export default Logo;
