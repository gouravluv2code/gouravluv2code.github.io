import {
	Box,
	Button,
	Container,
	Grid,
	GridItem,
	Heading,
	Image,
	Link,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import resume from "../Assests/Gourav-Tiwari-Resume.pdf"
const Header = () => {
	const handleResume=()=>{
		window.open("https://drive.google.com/file/d/10uZqYo9mWOJw0UyveX4k0gVcMLtaxf-_/view?usp=sharing","_blank")
	}
	return (
		<Container
			m='0'
			maxW='100%'
			id='#'
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
				h='auto'
				p={4}
				templateColumns={{
					base: "repeat(1, 1fr)",
					md: "repeat(3, 1fr)",
				}}
				flexDirection={{ base: "column-reverse", md: "row" }}
				placeItems='center'
				bg={useColorModeValue("white", "#000000")}
				mt={20}>
				<GridItem colSpan='2' width={{ base: "full", md: "90%" }}>
					<Box maxW='80rem'>
						<Heading
							size={"2xl"}
							mb={4}
							color={useColorModeValue("black", "gray.400")}
							id='user-detail-name'>
							Hi, I'm Gourav Tiwari
						</Heading>

						<Text
							id='user-detail-intro'
							fontSize='xl'
							mt='30px'
							color={useColorModeValue("black", "gray.400")}>
							A fullstack focused web developer building the
							frontend of websites and web applications that leads
							to the success of the overall product.
						</Text>
							<Button
								size='lg'
								mt='35px'
								pr={4}
								color={useColorModeValue("black", "gray.400")}
								id='resume-button-2'
								onClick={handleResume}
								>
								<a 
									href={resume}
									target='_blank'
									download={resume}
									rel='noreferrer'
									id="resume-link-2"
								>
								My Resume
								</a>
								<Image
									src='https://em-content.zobj.net/source/noto-emoji-animations/344/fire_1f525.gif'
									w='30px'
									mb='1'
									ml='1'
								/>
							</Button>
					</Box>
				</GridItem>
				<GridItem mt={4} mb={4} width={{ base: "full", md: "20rem" }}>
					<Image src='pic.png' className='home-img' alt='Gourav' />
				</GridItem>
			</Grid>
		</Container>
	);
};

export default Header;
