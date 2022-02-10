/* eslint-disable react/no-unescaped-entities */
import {
    Box,
    Container,
    Heading,
    Text,
    Stack,    
    SimpleGrid,
    Image,
    Flex,      
    StackDivider,
    useColorModeValue,    
    Button,
    useMediaQuery,
    Link
  } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Tilt from 'react-tilt';

function ProjectCard({website, github, text, title, techStack, imgSrc}) {
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
        {isNotSmallScreen ? <Link style={{ textDecoration: "none" }} href={website}><Button colorScheme="blue"> Visit </Button></Link> : ""}
        {isNotSmallScreen ? <Link style={{ textDecoration:"none" }} href={github}><Button colorScheme="blue" > Source </Button></Link> : ""}
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
      <Link style={{ textDecoration: "none" }} href={website}><Button colorScheme="blue"> Visit </Button></Link>
      <Link style={{ textDecoration: "none" }} href={github}><Button colorScheme="blue"> Source </Button></Link>
      </SimpleGrid>
      : ""}         
    </SimpleGrid>        
  </Container>
);
}

  

  const features = [
      { 
          id: 1,
          title: "Task Manager",
          text: "Allows for more organization throughout your month by creating tasks with date and time",
          imgSrc: "/images/task.png",
          website: "https://arvy-task-manager.herokuapp.com/home",
          github: "https://github.com/arwindersinghh/Task-Manager",
          techStack: ['React', 'Express', 'Node', 'MongoDB', 'JWT']
      },
      { 
        id: 2,
        title: "Puzzle Break",
        text: "A fully functional virtual escape-room entertainment website that not only allows you to play escape-rooms, but also create your own escape-rooms through the website platform",
        imgSrc: "/images/puzzle.png",
        website: "https://puzzle-break.herokuapp.com/",
        github: "https://github.com/escape-room-capstone/escape-room",
        techStack: ['React/Redux', 'Express', 'Node', 'JWT', 'PostgreSQL']
      },      
      { 
        id: 3,
        title: "Gimme Yo Money Gimmicks",
        text: "Gimmick store that has a bunch of weirdly unecessary gadgets that you didn't realize you've needed your whole life",
        imgSrc: "/images/gimmick.png",        
        website: "https://grace-shopper-gimmicks.herokuapp.com",
        github: "https://github.com/Graceshopper-Gimmick/Grace-Shopper-Gimmick/tree/main/Gimmick-Store",
        techStack: ['React/Redux', 'Express', 'Node', 'JWT', 'PostgreSQL']
      },
      { 
        id: 4,
        title: "Matching Card Game",
        text: "Simple but fun card game that will bring you back to your childhood",
        imgSrc: "/images/cards.jpg",
        website: "https://matching-cards-game.herokuapp.com/",
        github: "https://github.com/arwindersinghh/matching-card-game",
        techStack: ['HTML', 'JavaScript', 'CSS']
      }
  ]
  
  export default function Projects() {
    return (        
      <Box id="Projects" p={4}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={'3xl'}>Projects</Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
            Feel free to take a look at some of the projects I've worked on
          </Text>
        </Stack>              
      {features.map((feature) => {
          return (
              <ProjectCard key={feature.id} website={feature.website} github={feature.github} imgSrc={feature.imgSrc} title={feature.title} text={feature.text} techStack={feature.techStack} />
          )
      })}
      </Box>      
    );
  }