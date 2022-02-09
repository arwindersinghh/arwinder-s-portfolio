import { Flex, Heading, Spacer, VStack } from "@chakra-ui/react"
import { IconButton } from "@chakra-ui/button"
import { useColorMode } from "@chakra-ui/color-mode"
import Typewriter from 'typewriter-effect'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import Social from "./Social"
import Header from "./Header"

export default function Home() {

  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === "dark"

  return (
    <VStack>
      <Flex w="100%">
        <Heading
        ml="8" mt="5" size="lg" fontWeight="semibold" color="red.400"> 
        <Typewriter
          options={{
          strings: ['Software Engineer', 'Web Developer', 'Freelancer'],
          autoStart: true,
          loop: true,
        }}
        /> 
        </Heading>               
        <Spacer></Spacer>        
      <IconButton mt={5} ml={2} icon={ <AiFillGithub /> } isRound="true" />
      <IconButton mt={5} ml={2} icon={ <AiFillLinkedin /> } isRound="true" />
      <IconButton
        ml={8}
        mt={5}
        mr={5}         
        aria-label="change color"
        colorScheme={isDark ? "yellow" : "gray"}
        icon={ isDark ? <SunIcon /> : <MoonIcon />} 
        isRound="true" 
        onClick={toggleColorMode} 
      />
      </Flex>                       
      <Header />
      <Social />
    </VStack>
  )
}
