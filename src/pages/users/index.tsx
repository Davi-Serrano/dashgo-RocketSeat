import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text } from "@chakra-ui/react"

import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header"
import { RiAddLine, RiPencilLine } from "react-icons/ri";

export default function UserList() {
    return(
        <Box>
            <Header />
            <Flex w="100%" mt="6" maxW={1480} mx="auto" px="6">
                <Sidebar />
                <Box flex="1" borderRadius={8} bg="gray.800" p="8" >
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal"> Usuários </Heading>

                        <Button
                          as="a"
                          size="sm"
                          fontSize="sm"
                          colorScheme="pink"
                          leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                          >
                            Criar Novo
                        </Button>
                    </Flex>

                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px="6" color="gray.300" width="8" >
                                    <Checkbox colorScheme="pink" > </Checkbox>
                                </Th>
                                <Th>Usuário</Th>
                                <Th>Data de cadastro</Th>
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
                                <Td>12 de Fevereiro, 2022</Td>
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
                            </Tr>
                        </Tbody>
                    </Table>

                </Box>
            </Flex>
        </Box>
    );
}