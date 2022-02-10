import { CheckIcon } from "@chakra-ui/icons";
import { Container, Heading, Progress, Stack, useColorModeValue } from "@chakra-ui/react";









const EmptySkills = () => {


    

    return (
    <Container id="Skills" my={10}>        
  <Stack mt={5} spacing={5}>
  <Heading color={useColorModeValue('red.500', 'red.200')} size="sm"> JavaScript </Heading><Progress hasStripe isAnimated colorScheme='blue' size='lg' value={0} />
  <Heading color={useColorModeValue('red.500', 'red.200')} size="sm"> ReactJS </Heading><Progress hasStripe isAnimated colorScheme='blue' size='lg' value={0} />
  <Heading color={useColorModeValue('red.500', 'red.200')} size="sm"> NodeJS </Heading><Progress hasStripe isAnimated colorScheme='blue' size='lg' value={0} />
  <Heading color={useColorModeValue('red.500', 'red.200')} size="sm"> HTML/CSS </Heading><Progress hasStripe isAnimated colorScheme='blue' size='lg' value={0} />
  <Heading color={useColorModeValue('red.500', 'red.200')} size="sm"> Bootstrap/MaterialUI </Heading><Progress hasStripe isAnimated colorScheme='blue' size='lg' value={0} />
  <Heading color={useColorModeValue('red.500', 'red.200')} size="sm"> MongoDB/PostgreSQL </Heading><Progress hasStripe isAnimated colorScheme='blue' size='lg' value={0} />
  <Heading color={useColorModeValue('red.500', 'red.200')} size="sm"> Testing </Heading><Progress hasStripe isAnimated colorScheme='blue' size='lg' value={0} />
</Stack>
</Container> 
    )
}

export default EmptySkills;