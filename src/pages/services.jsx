import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllServices from "../components/services/allServices"; // Change to AllServices component if necessary

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/services.css"; // Change CSS file name if necessary

const Services = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "services");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Services | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="services" />
				<div className="content-wrapper">
					<div className="services-logo-container">
						<div className="services-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="services-container">
						<div className="title services-title">
							Professional Services to Elevate Your Experience.
						</div>

						<div className="subtitle services-subtitle">
							I’ve offered a variety of services over the years,
							and I’m proud of the value I've provided. Many of
							these services have positively impacted clients and
							helped them achieve their goals. If you're
							interested in any of the services I offer, feel free
							to reach out for more details or to discuss how I
							can assist you. I’m always open to new opportunities
							and feedback.
						</div>

						<div className="services-list">
							<AllServices />
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

export default Services;
