import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text, useBreakpointValue } from "@chakra-ui/react"
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header"
import { Pagination } from "../../components/Pagination";
import Link from "next/link";
import { useEffect } from "react";

export default function UserList() {

    useEffect(()=> {
        fetch('localhost:3000/api/users')
            .then(response => response.json())
                .then(data => console.log(data))
    }, [])

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })


    return(
        <Box>
            <Header />
            <Flex w="100%" mt="6" maxW={1480} mx="auto" px="6">
                <Sidebar />
                <Box flex="1" borderRadius={8} bg="gray.800" p="8" >
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal"> Usuários </Heading>
                        <Link href={"/users/create"} passHref>
                            <Button
                            as="a"
                            size="sm"
                            fontSize="sm"
                            colorScheme="pink"
                            leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                            >
                                Criar Novo
                            </Button>
                        </Link>
                    </Flex>

                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px={["4","4","6"]} color="gray.300" width="8" >
                                    <Checkbox colorScheme="pink" > </Checkbox>
                                </Th>
                                <Th>Usuário</Th>
                                { isWideVersion && <Th>Data de cadastro</Th>}
                                <Th w="8"></Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            <Tr>
                                <Td px="6">
                                    <Checkbox  colorScheme="pink" > </Checkbox>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeigth="bold"> Davi Serrano </Text>
                                        <Text fontSize="sm" color="gray.300"> daviscardoso2901@gmail.com </Text>
                                    </Box>
                                </Td>
                                { isWideVersion && <Td>12 de Fevereiro, 2022</Td>}
                                { isWideVersion && 
                                 <Td>
                                    <Button
                                        as="a"
                                        size="sm"
                                        fontSize="sm"
                                        colorScheme="purple"
                                        leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}
                                        >
                                        Editar
                                    </Button>
                                </Td>
                                }
                            </Tr>
                        </Tbody>
                    </Table>

                    <Pagination />

                </Box>
            </Flex>
        </Box>
    );
}