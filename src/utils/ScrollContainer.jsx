import React from "react";
import "../App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel } from "swiper";

import {
	Badge,
	Button,
	Container,
	Image,
	List,
	ListIcon,
	ListItem,
	Stack,
	useColorModeValue,
} from "@chakra-ui/react";
import { FaCheckCircle, FaGithub } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";
import { IconContext } from "react-icons";
import { CalendarIcon } from "@chakra-ui/icons";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { GoTools } from "react-icons/go";
// const options = [
// 	{ id: 1, desc: "1 week project" },
// 	{ id: 2, desc: "Ecommerce" },
// 	{ id: 3, desc: "Booking" },
// ];

const PackageTier = ({
	img,
	// options,
	className,
	typePlan,
	checked = false,
	github,
	deploy,
	tag,
	span,
	title,
	link,
	tools,
}) => {
	return (
		<Stack
		className={className}
			cursor='grab'
			onMouseEnter={(e) => {
				e.currentTarget.style.transform = "scale(1.01)";
				e.currentTarget.style.transition = "all 0.2s ease-in-out";
			}}
			onMouseLeave={(e) => {
				e.currentTarget.style.transform = "scale(1)";
				e.currentTarget.style.transition = "all 0.2s ease-in-out";
			}}
			p={3}
			justifyContent={{
				base: "flex-start",
				md: "space-around",
			}}
			direction={{
				base: "column",
				md: "column",
				lg: "row",
			}}
			alignItems={{ md: "center" }}>
			<Image
				src={img}
				w='20rem'
				alt={typePlan}
				border='2px dashed gray'
			/>
			<List
				spacing={3}
				textAlign='start'
			>
				<ListItem display='flex' alignItems={"center"} className="project-title">
					<ListIcon as={ExternalLinkIcon} color='green.500' />
					<a href={link} target='_blank' rel='noreferrer'>
						{title}
					</a>
				</ListItem>
				<ListItem
					display='flex'
					alignItems={"center"}
					className='project-description'>
					<ListIcon as={FaCheckCircle} color='green.500' />
					{tag}
				</ListItem>
				<ListItem display='flex' alignItems={"center"}>
					<ListIcon as={CalendarIcon} color='green.500' />
					{span}
				</ListItem>
				<ListItem
					display='flex'
					alignItems={"center"}
					className='project-tech-stack'>
					<ListIcon as={GoTools} color='green.500' />
					{tools}
				</ListItem>
			</List>
			<Badge
				fontSize={"1rem"}
				fontWeight='400'
				px='2'
				colorScheme='purple'
				textAlign='start'
				maxW='325px'
				className='project-title'>
				{typePlan}
			</Badge>
			<Stack direction={{ base: "column", md: "row" }} spacing={4}>
				<Button
					className='project-github-link'
					as='a'
					target='_blank'
					cursor='pointer'
					href={github}
					size='md'
					boxShadow={useColorModeValue("lg", "purple.400")}
					maxW='325px'>
					<FaGithub fontSize={"20px"} /> &nbsp; GitHub
				</Button>
				<IconContext.Provider
					value={{
						color: "#7CFCOO",
						className: "global-class-name",
					}}>
					<Button
						className='project-deployed-link'
						as='a'
						target='_blank'
						cursor='pointer'
						href={deploy}
						size='md'
						boxShadow={useColorModeValue("lg", "purple.400")}
						maxW='325px'>
						<IoRocketSharp
							color={useColorModeValue("black", "limegreen")}
							fontSize={"20px"}
						/>{" "}
						&nbsp;
						{tag === "Snippets-extension" ? "Demo" : "Live"}
					</Button>
				</IconContext.Provider>
				;
			</Stack>
		</Stack>
	);
};

export default function ScrollContainer() {
	return (
		<Container maxW={{ base: "100%", md: "100%", lg: "100%" }} >
			<Swiper
				direction={"vertical"}
				slidesPerView={2}
				spaceBetween={20}
				mousewheel={true}
				modules={[Mousewheel]}
				className='mySwiper'>
				<SwiperSlide>
					<PackageTier
						className='project-card'
						tools='Javascript | React JS | Redux | Chakra UI'
						tag='Online Store For Kids & Baby Products.'
						span='5 days'
						title='firstcry Clone'
						img={"firstcry.png"}
						// typePlan=''
						checked={true}
						// options={options}
						github='https://github.com/gouravluv2code/lean-school-408'
						deploy='https://little-lion.netlify.app/'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<PackageTier
						className='project-card'

						tools='Javascript | React JS | Chakra UI'
						tag="India's first women's social shopping website."
						span='5 days'
						title='Limeroad Clone'
						img={"limeroad.png"}
						// typePlan=''
						checked={true}
						// options={options}
						github='https://github.com/gouravluv2code/hanging-teeth-7136'
						deploy='https://famous-begonia-666085.netlify.app/'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<PackageTier
						className='project-card'
						tools='HTML | CSS | JavaScript'
						tag='An online store for grocery and all daily needs.'
						span='5 days'
						title='Jiomart Clone'
						img={"jiomart.png"}
						// typePlan=''
						checked={true}
						// options={options}
						github='https://github.com/gouravluv2code/material-sleep-1381'
						deploy='https://digital-bazaar.netlify.app/'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<PackageTier
						className='project-card'

						tools='HTML | CSS | JavaScript'
						tag='HubSpot is a CRM platform for Customer support'
						span='5 days'
						title='hubspot Clone'
						img={"hubspot.png"}
						// typePlan=''
						checked={true}
						// options={options}
						github='https://github.com/gouravluv2code/snazzy-event-1262'
						deploy='https://wondrous-pixie-cb46f9.netlify.app/'
					/>
				</SwiperSlide>
			</Swiper>
		</Container>
	);
}
