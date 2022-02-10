import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
    Box,
    chakra,
    Container,
    Spacer,
    Stack,
    Text,
    useColorMode,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
  
  const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
    
  export default function Footer() {

    const { colorMode, toggleColorMode } = useColorMode();
    
        
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>Designed with Chakra and Nextjs</Text>
          <Text>arwindersingh.dev@gmail.com</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Github'} href="https://github.com/arwindersinghh">
              <AiFillGithub />
            </SocialButton>
            <SocialButton label={'LinkedIn'} href='https://www.linkedin.com/in/arwindersinghh/'>
              <AiFillLinkedin />            
            </SocialButton>
            <Spacer></Spacer>
            <SocialButton label={'change color'}>
            {colorMode === 'light' ? <MoonIcon onClick={() => toggleColorMode()} /> : <SunIcon onClick={() => toggleColorMode()} color="yellow"/>}            
            </SocialButton>            
          </Stack>
        </Container>
      </Box>
    );
  }