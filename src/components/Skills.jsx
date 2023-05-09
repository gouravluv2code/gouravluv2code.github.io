import {
	Box,
	Button,
	ButtonGroup,
	Container,
	Flex,
	Grid,
	GridItem,
	Heading,
	Image,
	Link,
	Stack,
	Text,
	Tooltip,
	useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const SkillsArray = [
	{ title: "CSS", icon: "css.png" },
	{ title: "JavaScript", icon: "js.png" },
	{ title: "React", icon: "react.png" },
	{ title: "TypeScript", icon: "typescript.png" },
	{ title: "Redux", icon: "redux.png" },
	{ title: "Chakra UI", icon: "chakra.png" },
	{ title: "Bootstrap", icon: "bootstrap.png" },
	{ title: "Node JS", icon: "node.png" },
	{ title: "Express JS", icon: "express.png" },
	{ title: "Mongo DB", icon: "mongodb.png" }
];

const Skills = () => {
	return (
		<Container
			m='0'
			maxW='100%'
			p='5'
			w='full'
			h='full'
			bg={useColorModeValue("gray.100", "gray.900")}
			>
			<Grid
				boxShadow={useColorModeValue("lg", "dark-lg")}
				_hover={{
					transform: "translateY(-5px)",
					transition: "all 0.2s ease-out",
					boxShadow: "0 10px 50px -20px #b0c4de",
				}}
				w='100%'
				h='auto'
				p={8}
				templateColumns={{
					base: "repeat(1, 1fr)",
					md: "repeat(2, 1fr)",
				}}
				flexDirection={{ base: "column-reverse", md: "row" }}
				placeItems='center'
				bg={useColorModeValue("white", "#000000")}
				mt={12}>
				<GridItem width={{ base: "full", md: "90%" }}>
					<Box maxW='80rem'>
						<Heading
							size={"xl"}
							mb={4}
							// fontFamily={"cursive"}
							color={useColorModeValue("black", "gray.400")}
							>
							Get to know me!
						</Heading>
						<Text
							fontSize='md'
							mt='30px'
							// fontFamily={"cursive"}
							color={useColorModeValue("#666676", "gray.400")}
							>
							I'm a fullstack web developer building the front-end
							of websites and web applications that leads to the
							success of the overall product.heck out some of my
							work in the projects section. <br />
							<br />I also like sharing content related to the
							stuff that I have learned over the years in web
							development so it can help other people of the dev
							community. Feel free to Connect or follow me on my
							linkedin where I post useful content related to web
							development and programming <br />
							<br />
							I'm open to Job opportunities where I can
							contribute, learn and grow. If you have a good
							opportunity that matches my skills and experience
							then don't hesitate to contact me.
						</Text>
						<Link as='a' href='#contact'>
							<Button
								size='lg'
								mt='35px'
								mb={6}
								w={{ base: "full", md: "40%" }}
								color={useColorModeValue("black", "gray.400")}
								>
								Contact Me
							</Button>
						</Link>
					</Box>
				</GridItem>
				<GridItem
					// border='1px solid red'
					id='skills'
					mb={4}
					width={{ base: "full", md: "50%m" }}
					height='full'>
					<Heading
						size={"xl"}
						mb={10}
						ml='6'
						// fontFamily={"cursive"}
						color={useColorModeValue("black", "gray.400")}
						>
						My Skills
					</Heading>
					<Stack>
						<ButtonGroup
							spacing='6'
							color={useColorModeValue("black", "gray.400")}
							variant='ghost'
							display='grid'
							gridTemplateColumns={{
								base: "repeat(1, 1fr)",
								md: "repeat(1, 1fr)",
								lg: "repeat(2, 1fr)",
								"2xl": "repeat(4, 1fr)",
							}}
							gridGap='1rem'>
							<Tooltip label='HTML' placement='top-start'>
								<Box
									display='grid'
									placeItems='center'
									fontWeight='semibold'
									p={2}
									ml='6'
									rounded='md'
									bg={useColorModeValue(
										"#e7e7e7",
										"gray.800"
									)}
									w={{ base: "80%", md: "90%" }}
									color={useColorModeValue(
										"#666676",
										"gray.400"
									)}
									_hover={{
										bg: useColorModeValue(
											"black",
											"gray.400"
										),
										color: useColorModeValue(
											"white",
											"black"
										),
										cursor: "pointer",
									}}
									className='skills-card'>
									<Flex align={"center"} w='100%'>
										<Image
											className='skills-card-img'
											src='/html.png'
											alt='js'
											w='25px'
										/>
										<Text
											className='skills-card-name'
											as='span'
											ml={{ base: "4", md: "2" }}
											isTruncated>
											HTML
										</Text>
									</Flex>
								</Box>
							</Tooltip>
							{SkillsArray.map(({ title, icon }, idx) => {
								return (
									<Tooltip
										label={title}
										placement='top-start'
										key={idx}>
										<Box
											className='skills-card'
											display='grid'
											placeItems='center'
											fontWeight='semibold'
											p={2}
											rounded='md'
											bg="#e7e7e7"
											_dark={{ bg: "gray.800",color: "gray.400" }}
											color='#666676'
											_hover={{
												bg: "gray.400",
												color: "white",
												cursor: "pointer",
											}}
											w={{ base: "80%", md: "90%" }}
											textAlign='center'>
											<Flex align={"center"} w='100%'>
												<Image
													className='skills-card-img'
													src={icon}
													alt='js'
													w='25px'
												/>

												<Text
													className='skills-card-name'
													as='span'
													ml={{ base: "4", md: "2" }}
													isTruncated>
													{title}
												</Text>
											</Flex>
										</Box>
									</Tooltip>
								);
							})}
						</ButtonGroup>
					</Stack>
				</GridItem>
			</Grid>
		</Container>
	);
};

export default Skills;
