import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile(){
    return( 
        
        <Flex>
            <Box mr="4" textAlign="right">
                <Text>Davi Serrano</Text>
                <Text color="gray.300" fontSize="small">daviscardoso2901@gmail.com</Text>
            </Box>
            <Avatar size="md" name="Davi" src="https://github.com/Davi-Serrano"/>
        </Flex>
    );
}