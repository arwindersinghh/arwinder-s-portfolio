import { Container, Heading, Progress, Stack, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";








const Skills = (props) => {
        
    
    let [jsProgress, setjsProgress] = useState(0)
    let [rProgress, setrProgress] = useState(0)
    let [nProgress, setnProgress] = useState(0)
    let [hcssProgress, sethcssProgress] = useState(0)
    let [bmProgress, setbmProgress] = useState(0)
    let [dbProgress, setdbProgress] = useState(0)
    let [testProgress, settestProgress] = useState(0)


    useEffect(() => {
        if(jsProgress < 90){
            setTimeout(() => {
                setjsProgress(jsProgress+10)
            }, 400)
        }
    }, [jsProgress])
    useEffect(() => {
        if(rProgress < 80){
            setTimeout(() => {
                setrProgress(rProgress+10)
            }, 400)
        }
    }, [rProgress])
    useEffect(() => {
        if(nProgress < 70){
            setTimeout(() => {
                setnProgress(nProgress+10)
            }, 400)
        }
    }, [nProgress])
    useEffect(() => {
        if(hcssProgress < 80){
            setTimeout(() => {
                sethcssProgress(hcssProgress+10)
            }, 400)
        }
    }, [hcssProgress])
    useEffect(() => {
        if(bmProgress < 70){
            setTimeout(() => {
                setbmProgress(bmProgress+10)
            }, 400)
        }
    }, [bmProgress])
    useEffect(() => {
        if(dbProgress < 60){
            setTimeout(() => {
                setdbProgress(dbProgress+10)
            }, 400)
        }
    }, [dbProgress])
    useEffect(() => {
        if(testProgress < 70){
            setTimeout(() => {
                settestProgress(testProgress+10)
            }, 400)
        }
    }, [testProgress])

    

    return (        
    <Container id="Skills" my={10}>        
<Stack mt={5} spacing={5}>
  <Heading color={useColorModeValue('red.500', 'red.200')} size="sm"> JavaScript </Heading><Progress hasStripe isAnimated colorScheme='blue' size='lg' value={jsProgress} />
  <Heading color={useColorModeValue('red.500', 'red.200')} size="sm"> ReactJS </Heading><Progress hasStripe isAnimated colorScheme='blue' size='lg' value={rProgress} />
  <Heading color={useColorModeValue('red.500', 'red.200')} size="sm"> NodeJS </Heading><Progress hasStripe isAnimated colorScheme='blue' size='lg' value={nProgress} />
  <Heading color={useColorModeValue('red.500', 'red.200')} size="sm"> HTML/CSS </Heading><Progress hasStripe isAnimated colorScheme='blue' size='lg' value={hcssProgress} />
  <Heading color={useColorModeValue('red.500', 'red.200')} size="sm"> Bootstrap/MaterialUI </Heading><Progress hasStripe isAnimated colorScheme='blue' size='lg' value={bmProgress} />
  <Heading color={useColorModeValue('red.500', 'red.200')} size="sm"> MongoDB/PostgreSQL </Heading><Progress hasStripe isAnimated colorScheme='blue' size='lg' value={dbProgress} />
  <Heading color={useColorModeValue('red.500', 'red.200')} size="sm"> Testing </Heading><Progress hasStripe isAnimated colorScheme='blue' size='lg' value={testProgress} />
</Stack>
</Container> 
    )
}

export default Skills;