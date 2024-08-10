import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import {
	faFileCsv,
	faGlobe,
	faMailBulk,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faStackOverflow,
	faInstagram,
	faYoutube,
	faGooglePlus,
	faUpwork,
	faTiktok,
	faFreeCodeCamp,
	faLinkedin,
	faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Article from "../components/homepage/article";
import Works from "../components/homepage/works";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

import "./styles/homepage.css";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const currentSEO = SEO.find((item) => item.page === "home");

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<div style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div>
					</div>

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									{INFO.homepage.title}
								</div>

								<div className="subtitle homepage-subtitle">
									{INFO.homepage.description}
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src="https://scontent.fisb6-1.fna.fbcdn.net/v/t39.30808-6/417452854_122108130338219913_3701275444321066212_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CthiQ4kR8ZsAX8F4eaF&_nc_ht=scontent.fisb6-1.fna&oh=00_AfAwx6HQX2iLcI8rO4qeOklXBot--4fJBXW84bifgf_ooA&oe=6605A1A4"
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>
						{/* logo needed to be replaced:
						fiver
						freelancer */}
						<div className="homepage-socials">
							<a
								href={INFO.socials.website}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGlobe}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.facebook}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faFacebook}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.twitter}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faTwitter}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.youtube}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faYoutube}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.linkedin}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faLinkedin}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.freelancer}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faFreeCodeCamp}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.upwork}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faUpwork}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.tiktok}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faTiktok}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.fiver}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faFileCsv}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.googlePlus}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGooglePlus}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faInstagram}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faMailBulk}
									className="homepage-social-icon"
								/>
							</a>
						</div>
						<div className="homepage-projects">
							<AllProjects />
						</div>
						<div className="homepage-after-title">
							<div className="homepage-articles">
								{myArticles.map((article, index) => (
									<div
										className="homepage-article"
										key={(index + 1).toString()}
									>
										<Article
											key={(index + 1).toString()}
											date={article().date}
											title={article().title}
											description={article().description}
											link={"/article/" + (index + 1)}
										/>
									</div>
								))}
							</div>

							<div className="homepage-works">
								<Works />
							</div>
						</div>
						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;