import NextLink from "next/link";
import {useState} from "react"
import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text, useBreakpointValue, Spinner, Link } from "@chakra-ui/react"
import { RiAddLine } from "react-icons/ri";

import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header"
import { Pagination } from "../../components/Pagination";
import { useUsers } from "../../services/hooks/useUsers";
import { queryClient } from "../../services/queryClient";
import { api } from "../../services/axios/api";

export default function UserList() {
    const [ page, setPage ] = useState(1)
    const { data, isLoading, isFetching, error } = useUsers(page)
    
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })
    
    async function handlePrefchtUser(userId: number){
        await queryClient.prefetchQuery(["user", userId], async ()=>{
            const response = await api.get(`users/${userId}`)

            return response.data
        }),{
            staleTime: 1000 * 60 * 10  // 10 minutes
        }
    }

    return(
        <Box>
            <Header />
            <Flex w="100%" mt="6" maxW={1480} mx="auto" px="6">
                <Sidebar />
                <Box flex="1" borderRadius={8} bg="gray.800" p="8" >
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">
                             Usuários 
                            {!isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4"/>}
                        </Heading>
                        <NextLink href={"/users/create"} passHref>
                            <Button
                            as="a"
                            size="sm"
                            fontSize="sm"
                            colorScheme="pink"
                            leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                            >
                                Criar Novo
                            </Button>
                        </NextLink>
                    </Flex>
                        {isLoading ? (
                            <Flex justify="center"> 
                                <Spinner />
                            </Flex>
                        ) 
                        : error ? (
                            <Flex justify="center">
                                    <Text>Error</Text>
                            </Flex>
                        ) 
                        : (
                            <>
                                
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
                                        {data.users.map( user => {
                                        return (
                                            <Tr key={user.id}>
                                                <Td px="6">
                                                    <Checkbox  colorScheme="pink" > </Checkbox>
                                                </Td>
                                                <Td>
                                                    <Box>
                                                        <Link color="purple.400" onMouseEnter={()=>handlePrefchtUser(user.id)}>
                                                            <Text fontWeigth="bold"> {user.name} </Text>
                                                        </Link>
                                                        <Text fontSize="sm" color="gray.300"> {user.email} </Text>
                                                    </Box>
                                                </Td>
                                                { isWideVersion && <Td>{user.createdAt}</Td>}
                                            </Tr>
                                        )
                                        })} 
                                    </Tbody>
                                </Table>

                                <Pagination 
                                    totalCountsOfRegisters={data.totalCount}
                                    currentPage={page}
                                    onPageChange={setPage}
                                />
                            </>
                            )}

                </Box>
            </Flex>
        </Box>
    );
}