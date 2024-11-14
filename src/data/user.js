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
		logo: "https://scontent.fjed6-2.fna.fbcdn.net/v/t39.30808-6/456449393_122164989530219913_5363583704623229891_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=zOAfb99jH7cQ7kNvgGU_hjj&_nc_oc=Adhjg7lrrAcAnmzsbQVmUE8nsOSk8Ej3Px0nWHXmJ0NKc7mDtB_s1HxMB3mIaDvf3w2WsThsvYgaoyLvJ5yHS8yo&_nc_zt=23&_nc_ht=scontent.fjed6-2.fna&_nc_gid=AvD3tmEi9RdESeQ4ZT0gbJW&oh=00_AYAWmnjfmpBfeH4nOstmI9MUtajeV6hL5OvwpWjeCBgXrg&oe=673C0578",
	},

	socials: socials,

	homepage: {
		title: "Dwelup Corporation",
		description:
			"Architectural and Engineering Services 👇 Autocad Drafting| 3D Building Designs| Estimation",
		logo: "https://scontent.fisb6-2.fna.fbcdn.net/v/t39.30808-1/417561859_122095141052230291_2351026021627590104_n.jpg?stp=dst-jpg_p480x480&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-TR_c0WH6T4AX-uMy0h&_nc_oc=AdiYygFhv104HUTws5Ve3P4PmjLGgeXj9Y1EdqDiZ-RC8166sMvDl2reRghBH2XegQU&_nc_ht=scontent.fisb6-2.fna&oh=00_AfDPbot3CkcFUz2MI-3SSNvMkmpUpXaZC-gGUbGTWpWTuA&oe=6604839E",
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
			slug: "1",
			date: "5 June 2024",
			title: "4500 SQ FT House Plan",
			description:
				"Discover precision and excellence in every detail with our AutoCAD drafting design service for 4500 sq ft spaces. We specialize in bringing your architectural visions to life with meticulous accuracy, providing you with the tools to plan and execute your projects flawlessly. Explore how our AutoCAD expertise can transform your designs into reality.",
			logo: "https://static.wixstatic.com/media/8dfda6_68b74374c31a4153baf423b7f21bf3b5~mv2.jpg/v1/crop/x_0,y_8,w_3000,h_2227/fill/w_860,h_612,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/1%20Kanal%20House%20complete%20design_page-0001_edited.jpg",
			linkText: "View Project",
			link: "/project/1",
		},

		{
			slug: "2",
			date: "5 July 2024",
			title: "Tourist Office",
			description: (
				<>
					We're thrilled to unveil our latest architectural and
					engineering design project that's set to redefine spaces and
					functionality!
					<br />
					<br />
					<strong>Project Details:</strong>
					<br />
					• Ground Floor: 311 SQ Meters
					<br />
					• First Floor: 295 SQ Meters
					<br />• A two-floor marvel meticulously crafted on AutoCAD,
					designed to inspire!
				</>
			),
			logo: "https://static.wixstatic.com/media/8dfda6_bf3baf854f1840ddac6f536d60a1f90e~mv2.jpg/v1/fill/w_860,h_612,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Project%20GF_page-0001.jpg",
			linkText: "View Project",
			link: "/project/2",
		},

		{
			slug: "3",
			date: "5 Aug 2024",
			title: "House Plan Estimation",
			description: `Introducing Dwelup Corporation: Your Trusted Partner in Construction Material Solutions and Cost Estimation!
			At Dwelup Corporation, we take immense pride in providing top-notch Construction material and cost estimation services, tailored to meet your project needs!
			Construction Material and Cost Estimation: Our team of skilled experts excels in accurately estimating material requirements and associated costs, ensuring your projects stay on track and within budget.
			`,
			logo: "https://static.wixstatic.com/media/8dfda6_1579c24de8654150a88e6c5f5e8fe97e~mv2.png/v1/fill/w_860,h_612,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/1.png",
			linkText: "View Project",
			link: "/project/3",
		},

		{
			slug: "4",
			date: "5 Sep 2024",
			title: "3D House Design",
			description:
				"Elevate your architectural vision with our expert 3D house model design service on SketchUp. Our talented team brings your dream home to life in immersive 3D detail, helping you visualize and refine every aspect of your project. Experience the power of SketchUp and let your ideas take shape in three dimensions",
			logo: "https://static.wixstatic.com/media/8dfda6_3683a275fab14e4b8d68ac79313dd9eb~mv2.jpg/v1/crop/x_0,y_0,w_800,h_570/fill/w_800,h_569,fp_0.50_0.50,q_85,enc_auto/Untitled%20design_edited_edited.jpg",
			linkText: "View Project",
			link: "/project/4",
		},

		{
			slug: "5",
			date: "5 Oct 2024",
			title: "3D Commercial  Design",
			description:
				"Explore the future of commercial building design with our 3D SketchUp expertise. Our innovative team brings your vision to life in stunning detail, helping you conceptualize, plan, and communicate your projects with clarity and impact. Elevate your designs and create a lasting impression with our 3D commercial building solutions.",
			logo: "https://static.wixstatic.com/media/8dfda6_d5c8576019224ac994a83fc991d9635f~mv2.jpg/v1/fill/w_860,h_612,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202023-10-06%20at%2020_33_57_9c548c5f.jpg",
			linkText: "View Project",
			link: "/project/5",
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
