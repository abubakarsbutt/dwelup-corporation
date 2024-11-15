import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";

import Logo from "../components/common/logo";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";

import INFO from "../data/user";

import "./styles/viewService.css";

const ViewService = () => {
	let { slug } = useParams();
	const navigate = useNavigate();

	const service = INFO.services.find((x) => x?.slug === slug);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [service]);

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${service.title} | ${INFO.main.title}`}</title>
				<meta name="description" content={service.description} />
			</Helmet>

			<div className="page-content">
				<NavBar active="services" />

				<div className="content-wrapper">
					<div className="read-service-logo-container">
						<div className="read-service-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="read-service-container">
						<div className="read-service-back">
							<img
								src="../back-button.png"
								alt="back"
								className="read-service-back-button"
								onClick={() => navigate(-1)}
							/>
						</div>

						<div className="read-service-wrapper">
							<div className="read-service-date-container">
								<div className="read-service-date">
									{service.date}
								</div>
							</div>

							<div className="title read-service-title">
								{service.title}
							</div>

							<div className="read-service-body">
								<img
									src={service.logo}
									width={"100%"}
									height={"100%"}
									alt="random"
								/>
							</div>
							{service.description}
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

export default ViewService;
