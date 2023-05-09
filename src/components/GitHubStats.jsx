import {
	Container,
	Grid,
	GridItem,
	Image,
	useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
const GitHubStats = () => {
	return (
		<Container
			m='0'
			maxW='100%'
			p='5'
			w='full'
			h='full'
			bg={useColorModeValue("gray.100", "gray.900")}>
			<Grid
				boxShadow={useColorModeValue("lg", "dark-lg")}
				_hover={{
					transform: "translateY(-5px)",
					transition: "all 0.2s ease-out",
					boxShadow: "0 10px 50px -20px #b0c4de",
				}}
				w='100%'
				p={8}
				templateColumns={{
					base: "repeat(1, 1fr)",
					md: "repeat(3, 1fr)",
				}}
				gridGap={3}
				placeItems='center'
				bg={useColorModeValue("white", "#000000")}>
				<GridItem
					width={{ base: "full", md: "100%" }}
					colSpan={{ base: "1", md: "2" }}
					// border='1px solid red'
				>
					<GitHubCalendar
						username='gouravluv2code'
						blockSize={12}
						blockMargin={4}
						fontSize={14}
						textColor={useColorModeValue("gray.700", "gray.200")}
						tooltipProps={{ "data-testid": "tooltip" }}
						title='GitHub Calendar'
					/>
				</GridItem>
				<GridItem
					rowSpan={{ base: "1", md: "2" }}
					width={{ base: "full", md: "400px" }}
					h='100%'>
					<Image
						id='github-top-langs'
						src='https://github-readme-stats.vercel.app/api/top-langs/?username=gouravluv2code&layout=compact&theme=radical&hide_border=true'
						width='100%'
					/>
					<Image
						id='github-streak-stats'
						mt='2'
						src='https://github-readme-streak-stats.herokuapp.com/?user=gouravluv2code&theme=radical&hide_border=true'
						width='100%'
					/>
				</GridItem>
				<GridItem
					// border='1px solid red'
					width={{ base: "full", md: "400px", lg: "600px" }}
					h='100%'>
					<Image
						id='github-stats-card'
						src='https://github-readme-stats.vercel.app/api?username=gouravluv2code&show_icons=true&theme=radical&count_private=true&include_all_commits=true&hide=issues,contribs&hide_border=true&line_height=24'
						width='100%'
					/>
				</GridItem>
			</Grid>
		</Container>
	);
};

export default GitHubStats;
