
import { DownloadIcon } from '@chakra-ui/icons';
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  HStack,
  IconButton,
} from '@chakra-ui/react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { motion } from 'framer-motion';

export default function About() {
  return (
      <Container my={5} maxW={'2xl'}>
        {/* <Stack
          as={Box}                              
          textAlign={'center'}          
          spacing={{ base: 8, md: 14 }}          
          py={{ base: 20, md: 36 }}> */}
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
          Software Engineer who has built multiple production level applications and look forward to improving 
          user experiences through problem solving with like-minded people.
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <motion.button                        
            whileHover={{ transition: { duration: 1}, scale: 1.2 }}><Button
              leftIcon={<DownloadIcon />}
              colorScheme={'red'}
              variant="outline"              
              px={6}
              _hover={{
                bg: useColorModeValue('red.200', 'red.800')
              }}>            
              Resume
            </Button></motion.button>
            <HStack mt="40px" spacing="24px" justify="center">
            <motion.div whileHover={{ scale: 1.1 }}><IconButton _hover={{
                bg: useColorModeValue('red.800', 'red.200')
              }} colorScheme="red" size="lg" icon={<AiFillGithub />} isRound={true}></IconButton></motion.div>
            <motion.div whileHover={{ scale: 1.2 }}><IconButton _hover={{
                bg: useColorModeValue('red.800', 'red.200')
              }} colorScheme="red" size="lg" icon={<AiFillLinkedin />} isRound={true}></IconButton></motion.div>
        </HStack>
          </Stack>
        </Stack>
      </Container>    
  );
}


  


