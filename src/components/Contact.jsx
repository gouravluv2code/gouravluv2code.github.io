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
import { useRef } from "react";
import { BsGithub, BsLinkedin, BsPerson } from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { CgPhone } from "react-icons/cg";
export default function Contact() {
	const { hasCopied, onCopy } = useClipboard("gt9675tiwari@gmail.com");
	const toast = useToast();
	const name = useRef("");
	const email = useRef("");
	const message = useRef("");
	const handleSubmit = (e) => {
		e.preventDefault();
		const user = {
			name: name.current.value,
			email: email.current.value,
			msg: message.current.value,
		};
		console.log(user);
		const url = "https://worried-costume-lion.cyclic.app/portFriends";
		if (user.name === "" || user.email === "" || user.msg === "") {
			toast({
				title: "Message not sent.",
				description: "Please fill out all fields.",
				status: "error",
				duration: 4000,
				isClosable: true,
			});
		} else {
			fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(user),
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					toast({
						title: "Message sent.",
						description:
							"We've received your message and will get back to you shortly.",
						status: "success",
						duration: 4000,
						isClosable: true,
					});
				})
				.catch((err) => {
					console.log(err);
				});

			name.current.value = "";
			email.current.value = "";
			message.current.value = "";
		}
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
								<VStack spacing={5}>
									<FormControl isRequired>
										<FormLabel>Name</FormLabel>

										<InputGroup>
											<InputLeftElement
												children={<BsPerson />}
											/>
											<Input
												type='text'
												name='name'
												placeholder='Your Name'
												ref={name}
											/>
										</InputGroup>
									</FormControl>

									<FormControl isRequired>
										<FormLabel>Email</FormLabel>

										<InputGroup>
											<InputLeftElement
												children={<MdOutlineEmail />}
											/>
											<Input
												type='email'
												name='email'
												placeholder='Your Email'
												ref={email}
											/>
										</InputGroup>
									</FormControl>

									<FormControl isRequired>
										<FormLabel>Message</FormLabel>

										<Textarea
											name='message'
											placeholder='Your Message'
											rows={6}
											// resize='none'
											ref={message}
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
										onClick={handleSubmit}>
										Send Message
									</Button>
								</VStack>
							</Box>
						</Stack>
					</VStack>
				</Box>
			</Box>
		</Flex>
	);
}
