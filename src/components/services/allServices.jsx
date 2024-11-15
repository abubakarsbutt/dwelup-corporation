import React from "react";

import Service from "./service";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = () => {
	return (
		<div className="all-projects-container">
			{INFO.services.map((service, index) => (
				<div className="all-projects-project" key={index}>
					<Service
						logo={service.logo}
						title={service.title}
						description={service.description}
						linkText={service.linkText}
						link={service.link}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
