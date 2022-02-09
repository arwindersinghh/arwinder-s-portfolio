/* eslint-disable react/no-unescaped-entities */
import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack,
  } from '@chakra-ui/react';
import ProjectCard from './ProjectCard';
  
  
  

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
      <Box p={4}>
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