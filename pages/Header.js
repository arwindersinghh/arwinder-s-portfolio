import { Box, Center, Circle, Image, Stack } from "@chakra-ui/react";
import TypewriterComponent from "typewriter-effect";
import Tilt from 'react-tilt';
import { motion } from "framer-motion";


const Header = (props) => {    
    return (
        <Stack id="About" mt={3}>            
            <motion.div transition={{ duration: 2, repeat: 3}} animate={{ x: [0, 100, -100, 0] }} style={{ borderRadius: "100%", backgroundColor:"#fcb1b1", opacity: "0.3", zIndex:-1, position:"absolute", width: "300px", height: "300px", alignSelf:"center" }}>
                <Circle/>
            </motion.div>                                            
            <Center>
                    <Tilt>
                       <Image                    
                        alignSelf="center"                            
                        borderRadius="full"
                        backgroundColor = "transparent"
                        boxShadow = "lg"
                        boxSize="300px"
                        src="https://avatars.githubusercontent.com/u/58950434?v=4"
                        alt="prof-pic"
                        />
                    </Tilt>
            </Center>
            <Center>
                    <Box fontSize="lg" color="red.400">
                        <TypewriterComponent
                        options={{
                        strings: ['Software Engineer', 'Web Developer', 'Freelancer'],
                        autoStart: true,
                        loop: true,
                        }}/>
                    </Box>
            </Center>
            <motion.div transition={{ duration: 2, repeat: 3}} animate={{ x: [0, -100, 100, 0] }} style={{ borderRadius: "100%", backgroundColor:"#fcb1b1", opacity: "0.3", zIndex:-1, position:"absolute", width: "300px", height: "300px", alignSelf:"center" }}>
                <Circle/>
            </motion.div>
        </Stack>
    )
}

export default Header;