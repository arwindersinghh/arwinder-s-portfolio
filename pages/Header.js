import { Box, Button, Center, Circle, Flex, Image, Stack, Text, useColorMode, useMediaQuery } from "@chakra-ui/react";
//import { Wave, Random } from 'react-animated-text'
import { DownloadIcon, ViewIcon } from "@chakra-ui/icons"
import TypewriterComponent from "typewriter-effect";
import Tilt from 'react-tilt';


const Header = () => {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallScreen] = useMediaQuery('(min-width: 600px)');
    
    return (
        <Stack mt={3}>            
            <Circle      
            zIndex={-1}                   
            position = "absolute"
            bg =  "red.300"
            opacity = "0.1"
            w = "300px"
            h = "300px"
            alignSelf = "flex-end"            
            />            
               <Center><Tilt><Image
                    alignSelf="center"                            
                    borderRadius="full"
                    backgroundColor = "transparent"
                    boxShadow = "lg"
                    boxSize="300px"
                    src="https://avatars.githubusercontent.com/u/58950434?v=4"
                    alt="prof-pic"
                /></Tilt></Center>
                <Center><Box fontSize="lg" color="red.400"><TypewriterComponent
          options={{
          strings: ['Software Engineer', 'Web Developer', 'Freelancer'],
          autoStart: true,
          loop: true,
        }}
        /></Box></Center>
            <Circle          
            zIndex={-1}   
            position="absolute"
            bg =  "red.300"
            opacity = "0.1"
            w = "300px"
            h = "300px"
            alignSelf = "flex-start"
            />             
        </Stack>
    )
}

export default Header;