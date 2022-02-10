import {
  Heading,  
  Divider
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import Header from './Header';
import About from './About';
import EmptySkills from './EmptySkills';
import Projects from './projects';
import dynamic from 'next/dynamic';
import useInView from 'react-cool-inview';
import Footer from './Footer';
import Navbar from './Navbar'


const Skills = dynamic(() => import ("./Skills"));








export default function Home() {  


const { observe, inView } = useInView({
    threshold: 0.25,
    onChange: ({ observe }) => {      

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