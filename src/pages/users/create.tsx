import { Box, Button, Flex, Heading, Divider, VStack, SimpleGrid, HStack,  } from "@chakra-ui/react"

import Link from "next/link";

import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header"
import { Input } from "../../components/Form/input"

export default function UserList() {
    return(
        <Box>
            <Header />
            <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
                <Sidebar />
                
                <Box flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]}> 
                <Heading size="lg" fontWeight="normal" >Criar Novo Usuários</Heading>

                <Divider my="6" borderColor="gray.700"/>

                <VStack spacing="8">

                    <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%" >
                        <Input name="name" label="Nome Completo" />
                        <Input name="email" label="E-mail"/>
                    </SimpleGrid>

                    <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%" >
                        <Input name="password"  type="password" label="Senha"/>
                        <Input name="password_confirmation" type="password" label="Confirme a Senha"/>
                    </SimpleGrid>
                </VStack>

                <Flex mt="8" justify="flex-end">
                    <HStack spacing="4">
                    <Link href={"/users"} passHref>
                        <Button colorScheme="whiteAlpha" >Cancelar</Button>
                    </Link>    
                        <Button as="a" colorScheme="pink" >Salvar</Button>
                    </HStack>
                </Flex>

                </Box>
            </Flex>
        </Box>
    );
}