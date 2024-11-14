import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";

import Logo from "../components/common/logo";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";

import INFO from "../data/user";

import "./styles/viewProject.css";

const ViewProject = () => {
	let { slug } = useParams();
	const navigate = useNavigate();

	const project = INFO.projects.find((x) => x?.slug === slug);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [project]);

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${project.title} | ${INFO.main.title}`}</title>
				<meta name="description" content={project.description} />
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />

				<div className="content-wrapper">
					<div className="read-project-logo-container">
						<div className="read-project-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="read-project-container">
						<div className="read-project-back">
							<img
								src="../back-button.png"
								alt="back"
								className="read-project-back-button"
								onClick={() => navigate(-1)}
							/>
						</div>

						<div className="read-project-wrapper">
							<div className="read-project-date-container">
								<div className="read-project-date">
									{project.date}
								</div>
							</div>

							<div className="title read-project-title">
								{project.title}
							</div>

							<div className="read-project-body">
								<img
									src={project.logo}
									width={"100%"}
									height={"100%"}
									alt="random"
								/>
							</div>
							{project.description}
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ViewProject;
