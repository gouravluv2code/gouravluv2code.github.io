import { Box, Button, Flex, Icon, Text, } from "@chakra-ui/react";
// import { useNavigate } from "react-router-dom";
import resume from "../Assests/Gourav-Tiwari-Resume.pdf"
const NavItems = ({ text, icon, location, close, className, id }) => {
	const handleResume=()=>{
		window.open("https://drive.google.com/file/d/10uZqYo9mWOJw0UyveX4k0gVcMLtaxf-_/view?usp=sharing","_blank")
	}
	return (
		<Box onClick={close}
		   rel='noreferrer'
			cursor='pointer'
			w={"80%"}
			p='4'
			mt='2'
			mx='6'
			py='2'
			rounded={"md"}
			alignItems='center'
			className={className}
			textunderlineoffset='5px'
		>

			<Button fontWeight={700}
				fontSize='18'
				id={id}
				onClick={text==="Resume"?handleResume:null}
				variant='ghost'
			>
				<Icon
					as={icon}
					fontSize='25'
					mr='5'
				// color={useColorModeValue("gray.700", "gray.200")}
				/>
				<a rel='noreferrer'
					id="resume-link-1"
					target={text === "Resume" ? "_blank" : "_self"}
					href={
						text === "Resume"
							?  resume 
							: location
					}
					download={text==="Resume"?resume:null}
					>
					{text}
				</a>
			</Button>

		</Box>
	);
};

export default NavItems;
