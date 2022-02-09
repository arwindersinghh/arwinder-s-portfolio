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
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';




export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();

  const { isOpen, onOpen, onClose } = useDisclosure();
    
  const Links = ['About', 'Skills', 'Projects'];


const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}    
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    color={useColorModeValue('red.400', 'red.200')}
    href={'#'}>
    {children}
  </Link>
);
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
      <Skills /> 
      <Divider />
      <Projects />         
    </>
  );
}