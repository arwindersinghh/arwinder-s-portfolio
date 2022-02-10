
import { DownloadIcon } from '@chakra-ui/icons';
import {  
  Heading,
  Container,
  Text,
  Button,
  Stack,  
  useColorModeValue,  
  HStack,
  IconButton,
  Link
} from '@chakra-ui/react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { motion } from 'framer-motion';

export default function About() {
  return (    
      <Container my={5} maxW={'2xl'}>        
          <Stack mt={8} spacing={8}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Hey, I am <br />
            <Text bgClip="text" bgGradient="linear(to-r, red.400, red.500, yellow.400)" as={'span'} >
              Arwinder Singh
            </Text>
          </Heading>
          <Text color={'gray.500'}>
          Software Engineer who has built multiple production level applications and looks forward to improving 
          user experiences through problem solving with like-minded people.
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <motion.button                        
            whileHover={{ scale: 1.1 }}><Link href="resume.pdf"><Button
              isFullWidth
              leftIcon={<DownloadIcon />}              
              colorScheme={'red'}
              variant="outline"              
              px={5}              
              _hover={{
                bg: useColorModeValue('red.200', 'red.800')
              }}>            
              Resume
            </Button></Link></motion.button>
            <HStack mt="40px" spacing="24px" justify="center">
            <motion.div whileHover={{ scale: 1.1 }}><Link href="https://github.com/arwindersinghh"><IconButton _hover={{
                bg: useColorModeValue('red.800', 'red.200')
              }} colorScheme="red" size="lg" icon={<AiFillGithub />} isRound={true}></IconButton></Link></motion.div>
            <motion.div whileHover={{ scale: 1.2 }}><Link href="https://www.linkedin.com/in/arwindersinghh"><IconButton _hover={{
                bg: useColorModeValue('red.800', 'red.200')
              }} colorScheme="red" size="lg" icon={<AiFillLinkedin />} isRound={true}></IconButton></Link></motion.div>
        </HStack>
          </Stack>
        </Stack>
      </Container>          
  );
}


  


