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
import { CloseIcon, EmailIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import NextLink from 'next/link'
import Header from './Header';
import About from './About';
//import Skills from './Skills';
import EmptySkills from './EmptySkills';
import Projects from './Projects';
import dynamic from 'next/dynamic';
import useInView from 'react-cool-inview';
import Footer from './Footer';


const Skills = dynamic(() => import ("./Skills"));








export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();

  const { isOpen, onOpen, onClose } = useDisclosure();

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
  
    
  const Links = ['About', 'Skills', 'Projects'];


const NavLink = ({ children }) => {  
  return (<NextLink href={`#${children[1]}`} passHref><Link
    px={2}
    py={1}
    rounded={'md'}    
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    color={useColorModeValue('red.400', 'red.200')}
    >
    {children}
  </Link></NextLink>)
};

  return (
    <>
      <Box zIndex={200} sx={{ position: 'sticky', top: '0' }} bg={useColorModeValue('gray.100', 'gray.900')} px={4}>            
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />                  
        <Box fontWeight={'bold'} color={useColorModeValue('red.400', 'red.200')}> ASDev </Box>
        <HStack spacing={20}
            as = {'nav'}
            display = {{ base: 'none', md: 'flex' }} >
                {Links.map((link) => (
                    <NavLink key={link}> {link} </NavLink>
                ))}
                <Link style={{ textDecoration:"none" }} href="mailto:arwindersingh.dev@gmail.com"><Button color={useColorModeValue('red.400', 'red.200')} variant="ghost" fontWeight="normal" leftIcon={<EmailIcon />}> Contact </Button></Link>
            </HStack>        
          <Flex alignItems={'center'}>
                            
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon color="yellow"/>}
              </Button>
            </Stack>
          </Flex>          
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}        
      </Box>
      <Header />      
      <About />  
      <Divider />
      <div ref={observe}>{inView ? <Skills /> : <EmptySkills /> }</div>
      <Divider />
      <Projects />
      <Footer />
    </>
  );
}