import React from 'react'
import {
    Button, Container, Flex, HStack, Text, useColorMode, useColorModeValue, Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,

} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { PlusSquareIcon, ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons"
import { IoMoon } from "react-icons/io5"
import { LuSun } from "react-icons/lu"


const Navbar = () => {
    
    const { colorMode, toggleColorMode } = useColorMode()

    return <Container maxW={"1140px"} px={4} bg={useColorModeValue("gray.900","gray.800")}>
        <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDir={{
                base: "column",
                sm: "row"

            }}
        >

            <Menu>
                
                <MenuButton as={Button} rightIcon={<HamburgerIcon />} variant={'link'} size={'lg'}>

                </MenuButton>
                <MenuList>
            <MenuItem>
                <Button w={"full"} onClick={toggleColorMode}>
                    {colorMode === "light" ? <IoMoon /> : <LuSun size='20' />}
                </Button>
</MenuItem>
                    <MenuItem as="a" href='/create'>
                        <Button w={"full"} bg={"bg"} variant={'link'}>
                            <MenuItem>

                                Create
                            </MenuItem>
                        </Button>
                    </MenuItem>
                    <MenuItem as="a" href='/login'>
                        <Button w={"full"} bg={"bg"} variant={'link'}>
                            <MenuItem>

                                Login
                            </MenuItem>

                            
                        </Button>
                    </MenuItem>
                    <MenuItem as="a" href='/cart'>
                        <Button w={"full"} bg={"bg"} variant={'link'}>
                            

                            
                        </Button>
                    </MenuItem>
                </MenuList>
            </Menu>

            <Text
                fontSize={{ base: "22", sm: "28" }}
                fontWeight={"bold"}
                textTransform={"uppercase"}
                textAlign={"center"}
                bgGradient={"linear(to-r, cyan.400, blue.500)"}
                bgClip={"text"}
            >
                <Link to={"/"}>Product Store 🛒</Link>
            </Text>
            <HStack>
                <Link to={"/create"}>
                    <Button>
                        <PlusSquareIcon fontSize={20} />
                    </Button>

                </Link>
                

            </HStack>


        </Flex>
    </Container>
}

export default Navbar