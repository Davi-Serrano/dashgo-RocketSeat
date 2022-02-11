import { Flex, Text, Input, Icon, HStack, Box, Avatar } from "@chakra-ui/react"
import{ RiNotificationLine, RiSearchEyeLine, RiUserAddLine } from "react-icons/ri"

export function Header(){
    return(
        <Flex
        as='header'
          w='100%'
          maxWidth={1480}
          h='20'
          mx='auto'
          mt='4'
          px='6'
          align='center'
          >
              <Text
                fontSize="3xl"
                fontWeight='bold'
                letterSpacing='tight'
                w="64"
                >
                  dashgo
                  <Text as='span' marginLeft="1" color="pink.500">.</Text>
              </Text>

              <Flex
               as='label'
               flex="1"
               py='4'
               px='8'
               ml='6'
               maxWidth={400}
               alignSelf="center"
               color="gray.200"
               position="relative"
               bg="gray.800"
               borderRadius="full"

               >
                    <Input
                      color="gray.50"
                      variant="unstyled"
                      px="4"
                      mr="4" 
                      placeholder="Buscar na plataforma"
                      _placeholder={{
                            color: 'gray.400'}}
                      />

                      <Icon as={RiSearchEyeLine} fontSize='20' />
              </Flex>
              
              <Flex
                aling="center"
                ml="auto">

                <HStack
                  spacing="4"
                  mx="8"
                  pr="8"
                  py="1"
                  color="gray.300"
                  borderRightWidth={1}
                  borderColor="gray.70"
                  > 

                  <Icon as={RiNotificationLine} fontSize='20' />
                  <Icon as={RiUserAddLine} fontSize='20' />

                </HStack>
                  
                <Flex>
                  <Box mr="4" textAlign="right">
                    <Text>Davi Serrano</Text>
                    <Text color="gray.300" fontSize="small">
                      daviscardoso2901@gmail.com
                    </Text>
                  </Box>
                  <Avatar size="md" name="Davi" src="https://github.com/Davi-Serrano"/>
                </Flex>

              </Flex>
        </Flex>
    )
}