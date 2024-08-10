import { faFileCsv, faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
	faTwitter,
	faLinkedin,
	faInstagram,
	faFacebook,
	faYoutube,
	faFreeCodeCamp,
	faUpwork,
	faTiktok,
	faGooglePlus,
} from "@fortawesome/free-brands-svg-icons";

const socials = {
	youtube:
		"https://youtube.com/@dwelupcorporationofficial?si=ndmVYJFt4K_hcsQ-",
	twitter: "https://x.com/DwelupOfficial?t=LhS31XQ0FmJ98yO8cpsmGg&s=09",
	googlePlus: "https://g.co/kgs/P9ZtPD9",
	fiver: "https://www.fiverr.com/haideraliihsan",
	upwork: "https://www.upwork.com/freelancers/~010273af626a82c4e7",
	tiktok: "https://www.tiktok.com/@dwelupcorporation?_t=8kGdtwy0hVP&_r=1",
	freelancer:
		"https://www.freelancer.com/u/HaiderIhsan1?frm=HaiderIhsan1&sb=t",
	linkedin: "https://www.linkedin.com/company/dwelup-corporation/",
	instagram:
		"https://www.instagram.com/dwelupcorporation?igsh=MWh5ZWNxbDZxeHRzcQ==",
	website: "https://dwelupcorporation.wixstudio.io/dwelup-corporation",
	facebook:
		"https://www.facebook.com/dwelupcorporationofficial1?mibextid=ZbWKwL",
};

const INFO = {
	main: {
		title: "Dwelup Corporation",
		name: "Dwelup Corporation",
		email: "devdwelupcorporation1@gmail.com",
		logo: "https://scontent.fisb6-2.fna.fbcdn.net/v/t39.30808-1/417561859_122095141052230291_2351026021627590104_n.jpg?stp=dst-jpg_p480x480&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-TR_c0WH6T4AX-uMy0h&_nc_oc=AdiYygFhv104HUTws5Ve3P4PmjLGgeXj9Y1EdqDiZ-RC8166sMvDl2reRghBH2XegQU&_nc_ht=scontent.fisb6-2.fna&oh=00_AfDPbot3CkcFUz2MI-3SSNvMkmpUpXaZC-gGUbGTWpWTuA&oe=6604839E",
	},

	socials: socials,

	homepage: {
		title: "Dwelup Corporation",
		description:
			"Architectural and Engineering Services 👇 Autocad Drafting| 3D Building Designs| Estimation",
	},

	about: {
		title: "DWELUP CORPORATION",
		description:
			"We provide eco-friendly design and expert engineering services, encompassing drafting, 3D house design, construction estimation, and structural analysis and design, across a diverse range of projects.",
	},

	articles: {
		title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	projects: [
		{
			title: "Project 1",
			description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com",
		},

		{
			title: "Project 2",
			description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com",
		},

		{
			title: "Project 3",
			description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			linkText: "View Project",
			link: "https://github.com",
		},

		{
			title: "Project 4",
			description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com",
		},

		{
			title: "Project 5",
			description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com",
		},
	],
	aboutSocials: [
		{
			url: socials.instagram,
			icon: faInstagram,
			label: "Instagram",
		},
		{
			url: socials.googlePlus,
			icon: faGooglePlus,
			label: "GooglePlus",
		},
		{
			url: socials.fiver,
			icon: faFileCsv,
			label: "Fiver",
		},
		{
			url: socials.tiktok,
			icon: faTiktok,
			label: "Tiktok",
		},
		{
			url: socials.upwork,
			icon: faUpwork,
			label: "Upwork",
		},
		{
			url: socials.freelancer,
			icon: faFreeCodeCamp,
			label: "Freelancer",
		},
		{
			url: socials.linkedin,
			icon: faLinkedin,
			label: "Linkedin",
		},
		{
			url: socials.youtube,
			icon: faYoutube,
			label: "Youtube",
		},
		{
			url: socials.twitter,
			icon: faTwitter,
			label: "Twitter",
		},
		{
			url: socials.website,
			icon: faGlobe,
			label: "Globe",
		},
		{
			url: socials.facebook,
			icon: faFacebook,
			label: "Facebook",
		},
	],
};

export default INFO;
