import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    useColorModeValue,    
    Button,
    useMediaQuery    
  } from '@chakra-ui/react';    
import { motion } from 'framer-motion';
import NextLink from 'next/link'
import Tilt from 'react-tilt';
  

  

  
  export default function ProjectCard({website, github, text, title, techStack, imgSrc}) {
      const bgColorToUse = useColorModeValue('red.500', 'red.200');
      const colorToUse =  useColorModeValue('red.100', 'red.800');
      const [isNotSmallScreen] = useMediaQuery('(min-width: 770px)')

    return (
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>            
            <Heading>{title}</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
              {text}
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>              
            </Stack>
            
            <SimpleGrid columns={2} spacingX='80px' spacingY='20px'>
            {techStack.map((skill, i) => {
                return (
                    <motion.div key={i} whileHover={{ scale: 1.1 }}><Text                    
              textTransform={'uppercase'}
              color={colorToUse}
              fontWeight={600}
              fontSize={'sm'}
              bg={bgColorToUse}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              {skill}
            </Text>            
            </motion.div>
                )
            })}            
            </SimpleGrid>                        
            {isNotSmallScreen ? <NextLink href={website}><Button> Visit </Button></NextLink> : ""}
            {isNotSmallScreen ? <NextLink href={github}><Button> Source </Button></NextLink> : ""}
          </Stack>
          <Flex>              
            <Tilt><Image
              rounded={'md'}
              height="100%"
              alt={'feature image'}
              src={imgSrc}
              objectFit={'cover'}
            /></Tilt>
          </Flex>
          {!isNotSmallScreen ? <SimpleGrid spacing={'20px'} columns={2}>
          <NextLink href={website}><Button> Visit </Button></NextLink>
          <NextLink href={github}><Button> Source </Button></NextLink>
          </SimpleGrid>
          : ""}         
        </SimpleGrid>        
      </Container>
    );
  }