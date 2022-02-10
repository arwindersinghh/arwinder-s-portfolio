import {
    Box,
    Flex,    
    Link,
    Button,
    useColorModeValue,
    Stack,
    useColorMode,
    useDisclosure,    
    HStack,
    IconButton,    
  } from '@chakra-ui/react';
  import { CloseIcon, EmailIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';  
  import { Link as ReactScrollLink } from 'react-scroll'  
  import { animateScroll as scroll } from 'react-scroll'



export default function Nav(){


const { isOpen, onOpen, onClose } = useDisclosure();
const { colorMode, toggleColorMode } = useColorMode();
const colorModeVal = useColorModeValue('red.400', 'red.200');




//use react scroll link imported above...
const NavLink = ({ children }) => {
      
  return (<Link
    px={2}
    py={1}
    rounded={'md'}    
    _hover={{
      cursor: "pointer",
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    color={useColorModeValue('red.400', 'red.200')}
    >
    {children}
  </Link>)
};



  return (    
      <Box zIndex={200} sx={{ position: 'sticky', top: '0' }} bg={useColorModeValue('gray.100', 'gray.900')} px={4}>            
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />                  
        <Box
        px={2}
        py={1}
        rounded={'md'} 
        _hover={{      
        bg: useColorModeValue('gray.200', 'gray.700'),
        cursor: "n-resize"
        }}
    onClick={() => scroll.scrollToTop()} fontStyle="italic" fontWeight={'bold'} color={useColorModeValue('red.400', 'red.200')}> ASDev </Box>
        <HStack spacing={20}
            as = {'nav'}
            display = {{ base: 'none', md: 'flex' }} >                                
                <ReactScrollLink to="About" smooth={true} duration={1000} offset={250}><NavLink> About </NavLink></ReactScrollLink>
                <ReactScrollLink to="Skills" smooth={true} duration={1000} offset={-150}><NavLink> Skills </NavLink></ReactScrollLink>
                <ReactScrollLink to="Projects" smooth={true} duration={1000} offset={-68}><NavLink> Projects </NavLink></ReactScrollLink>                
            </HStack>        
            <Link display = {{ base: 'none', md: 'flex' }} style={{ textDecoration:"none" }} href="mailto:arwindersingh.dev@gmail.com"><Button color={useColorModeValue('red.400', 'red.200')} variant="ghost" fontWeight="normal" leftIcon={<EmailIcon />}> Contact </Button></Link>
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
                <ReactScrollLink onClick={isOpen ? onClose : onOpen} to="About" smooth={true} duration={1000} offset={75}><NavLink> About </NavLink></ReactScrollLink>
                <ReactScrollLink onClick={isOpen ? onClose : onOpen} to="Skills" smooth={true} duration={1000} offset={-322}><NavLink> Skills </NavLink></ReactScrollLink>
                <ReactScrollLink onClick={isOpen ? onClose : onOpen} to="Projects" smooth={true} duration={1000} offset={-242}><NavLink> Projects </NavLink></ReactScrollLink>                
              <Link style={{ textDecoration:"none" }} href="mailto:arwindersingh.dev@gmail.com"><Button color={colorModeVal} variant="ghost" fontWeight="normal" leftIcon={<EmailIcon />}> Contact </Button></Link>
            </Stack>
          </Box>
        ) : null}        
      </Box>)

}