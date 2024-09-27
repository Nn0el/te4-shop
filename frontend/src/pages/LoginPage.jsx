import {
  Container, Text, VStack, SimpleGrid, Input, Stack, InputLeftElement, InputGroup, InputRightElement,
  Box, Spacer, Flex, Button, HStack, Divider, AbsoluteCenter, useColorModeValue,
  Center,
} from '@chakra-ui/react'
import { CheckIcon, PhoneIcon } from '@chakra-ui/icons'

import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProductStore } from '../store/product'
import ProductCard from "../components/ProductCard";

const LoginPage = () => {
const ButtonWidth = "100px"


  return <Container maxW={"container.sm"} >











    <VStack>
      <Box bg={useColorModeValue("gray.800", "gray.800")} w='80%' p={4} marginTop={10} >
        <HStack spacing={20}>
          <Text textColor={useColorModeValue("white", "blue.600")}>Logga in med:</Text>

          <Text textColor={useColorModeValue("white", "blue.600")} marginRight={1}>Logga in på ditt konto</Text>
         
        </HStack>

        <VStack >
          <HStack >
            <Container >
              <VStack marginBottom={100} marginRight={5}>
              <Button w={ButtonWidth}>Facebook</Button>
              <Button w={ButtonWidth}>Google</Button>
              </VStack>
            </Container>


            <Divider orientation='vertical' h={'200px'} w={'0px'} paddingRight={10}></Divider>

            <VStack spacing='24px'>

              <Input placeholder='Username' textColor={'black'} bg={'gray.400'} w={"90%"} />

              <Input placeholder='Password' textColor={'black'} bg={'gray.400'} w={"90%"}/>

              <HStack spacing={'50px'}>
                <Button bg={'blue.500'} >Logga in</Button  >
                <Button>  Skapa Konto </Button>
              </HStack>
            </VStack>
          </HStack>
        </VStack>

      </Box>
    </VStack>
  </Container>


}



export default LoginPage