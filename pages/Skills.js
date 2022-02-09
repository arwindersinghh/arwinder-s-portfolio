import { CheckIcon } from "@chakra-ui/icons";
import { Container, Flex, Heading, HStack, Progress, Stack, Text, useColorModeValue } from "@chakra-ui/react";



const Skills = () => {
    return (
    <Container my={10}>
        <Heading type="vertical">Skills <CheckIcon /></Heading>
<Stack mt={5} spacing={5}>
  <Heading color={useColorModeValue('red.500', 'red.200')} size="sm"> JavaScript </Heading><Progress as={'span'} colorScheme='blue' size='lg' value={90} />
  <Heading color={useColorModeValue('red.500', 'red.200')} size="sm"> ReactJS </Heading><Progress colorScheme='blue' size='lg' value={75} />
  <Heading color={useColorModeValue('red.500', 'red.200')} size="sm"> NodeJS </Heading><Progress colorScheme='blue' size='lg' value={65} />
  <Heading color={useColorModeValue('red.500', 'red.200')} size="sm"> HTML/CSS </Heading><Progress colorScheme='blue' size='lg' value={80} />
  <Heading color={useColorModeValue('red.500', 'red.200')} size="sm"> Bootstrap/MaterialUI </Heading><Progress colorScheme='blue' size='lg' value={70} />
  <Heading color={useColorModeValue('red.500', 'red.200')} size="sm"> MongoDB/PostgreSQL </Heading><Progress colorScheme='blue' size='lg' value={65} />
  <Heading color={useColorModeValue('red.500', 'red.200')} size="sm"> Testing </Heading><Progress colorScheme='blue' size='lg' value={70} />
</Stack>
</Container>
    )
}

export default Skills;