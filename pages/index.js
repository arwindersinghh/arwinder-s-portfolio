import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,  
  useColorModeValue,
  Stack,
  useColorMode,
  useDisclosure,
  Center,
  Heading,
  HStack,
  IconButton,
  Divider,
} from '@chakra-ui/react';
import { CheckIcon, CloseIcon, EmailIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import NextLink from 'next/link'
import Header from './Header';
import About from './About';
//import Skills from './Skills';
import EmptySkills from './EmptySkills';
import Projects from './Projects';
import dynamic from 'next/dynamic';
import useInView from 'react-cool-inview';
import Footer from './Footer';
import Navbar from './Navbar'


const Skills = dynamic(() => import ("./Skills"));








export default function Home() {  

//   const { observe, inView } = useInView({
//       unobserveOnEnter : true,      
//   })
const { observe, unobserve, inView, scrollDirection, entry } = useInView({
    threshold: 0.25,
    onChange: ({ inView, scrollDirection, entry, observe, unobserve }) => {      

      observe();
         
    },
    onEnter: ({ unobserve }) => {
      unobserve()
    }
    
    
  });
  
    
  return (
    <>   
      <Navbar />   
      <Header />      
      <About />  
      <Divider />
      <Heading align="center">Skills <CheckIcon /></Heading>
      <div ref={observe}>{inView ? <Skills /> : <EmptySkills /> }</div>      
      <Divider />
      <Projects />
      <Footer />
    </>
  );
}