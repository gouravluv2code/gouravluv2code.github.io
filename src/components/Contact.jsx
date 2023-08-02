import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	HStack,
	IconButton,
	Input,
	InputGroup,
	InputLeftElement,
	Link,
	Stack,
	Text,
	Textarea,
	Tooltip,
	useClipboard,
	useColorModeValue,
	useToast,
	VStack,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { BsGithub, BsLinkedin, BsPerson } from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { CgPhone } from "react-icons/cg";
export default function Contact() {
	const { hasCopied, onCopy } = useClipboard("gt9675tiwari@gmail.com");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// send form data to server
		setName("");
		setEmail("");
		setMessage("");
	};
	return (
		<Flex mt='-5' align='center' justify='center' id='contact'>
			<Box
				borderRadius='lg'
				m={{ base: 5, md: 16, lg: 10 }}
				p={{ base: 5, lg: 16 }}>
				<Box>
					<VStack
						spacing={{ base: 4, md: 8, lg: 20 }}
						w={{ base: "full", md: "full", lg: "500px" }}>
						<Stack

							w={{ base: "320px", md: "full", lg: "700px" }}
							justifyContent='center'
							alignItems='left'
							spacing={{ base: 4, md: 8, lg: 20 }}
							direction={{ base: "column", md: "row" }}>
							<Stack
								align='left'
								justify='space-around'
								direction={{ base: "column", md: "column" }}>
								<HStack>
									<Link
										id='contact-github'
										href='https://github.com/gouravluv2code'
										target='_blank'>
										<IconButton
											aria-label='github'
											variant='ghost'
											size='lg'
											fontSize='3xl'
											icon={<BsGithub />}
											_hover={{
												bg: "blue.500",
												color: useColorModeValue(
													"white",
													"gray.700"
												),
											}}
											isRound
										/>
									</Link>
									<Text>@gouravluv2code</Text>
								</HStack>
								<HStack>
									<Link
										id='contact-linkedin'
										href='https://www.linkedin.com/in/gourav-tiwari-bb7223218/'
										target='_blank'>
										<IconButton
											aria-label='LinkedIn'
											variant='ghost'
											size='lg'
											icon={<BsLinkedin size='28px' />}
											_hover={{
												bg: "blue.500",
												color: useColorModeValue(
													"white",
													"gray.700"
												),
											}}
											isRound
										/>
									</Link>
									<Text>@gouravluv2code</Text>
								</HStack>
								<HStack>
									<Tooltip
										label='+91 7838136023'
										closeOnClick={false}
										hasArrow>
										<IconButton
											aria-label='phone'
											variant='ghost'
											size='lg'
											icon={<CgPhone size='28px' />}
											_hover={{
												bg: "blue.500",
												color: useColorModeValue(
													"white",
													"gray.700"
												),
											}}
											isRound
										/>
									</Tooltip>
									<Text id='contact-phone'>
										+91 7838136023
									</Text>
								</HStack>

								<HStack>
									<Tooltip
										label={
											hasCopied
												? "Email Copied!"
												: "Copy Email"
										}
										closeOnClick={false}
										hasArrow>
										<IconButton
											aria-label='email'
											variant='ghost'
											size='lg'
											fontSize='3xl'
											icon={<MdEmail />}
											_hover={{
												bg: "blue.500",
												color: useColorModeValue(
													"white",
													"gray.700"
												),
											}}
											onClick={onCopy}
											isRound
										/>
									</Tooltip>
									<Text id='contact-email'>
										gt9675tiwari@gmail.com
									</Text>
								</HStack>
							</Stack>
							<Box
								w={{ base: "100%", md: "full", lg: "100%" }}
								bg={useColorModeValue("white", "black")}
								borderRadius='lg'
								p={8}
								color={useColorModeValue(
									"gray.700",
									"whiteAlpha.900"
								)}
								shadow='base'
								boxShadow={useColorModeValue("lg", "dark-lg")}
								_hover={{
									transform: "translateY(-5px)",
									transition: "all 0.2s ease-out",
									boxShadow: "0 10px 50px -20px #b0c4de",
								}}>
								<form onSubmit={handleSubmit} action="https://formspree.io/f/xlekvryd" method="post" spacing={8} target="_blank">
									<FormControl isRequired>
										<FormLabel>Name</FormLabel>

										<InputGroup>
											<InputLeftElement
												children={<BsPerson />}
											/>
											<Input
												type='text'
												name='Name'
												placeholder='Your Name'
											    value={name}
											/>
										</InputGroup>
									</FormControl>

									<FormControl isRequired>
										<FormLabel mt={"7px"}>Email</FormLabel>

										<InputGroup>
											<InputLeftElement
												children={<MdOutlineEmail />}
											/>
											<Input
												type='email'
												name='Email'
												placeholder='Your Email'
											value={email}
											/>
										</InputGroup>
									</FormControl>

									<FormControl isRequired>
										<FormLabel mt={"7px"}>Message</FormLabel>

										<Textarea
											name='Message'
											placeholder='Your Message'
											rows={6}
									    	// resize='none'
										    value={message}
										/>
									</FormControl>

									<Button
										colorScheme='blue'
										bg='blue.400'
										color='white'
										_hover={{
											bg: "blue.500",
										}}
										type='submit'
									// isFullWidth
									// onClick={handleSubmit}
									>
										Send Message
									</Button>
								</form>
							</Box>
						</Stack>
					</VStack>
				</Box>
			</Box>
		</Flex>
	);
}
