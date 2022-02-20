import { Box, Flex, SimpleGrid, Text, theme} from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import dynamic from 'next/dynamic';
import { delBasePath } from "next/dist/shared/lib/router/router";

const Charts = dynamic(() => import('react-apexcharts'), 
{ ssr: false });

const options = {
     chart: {
         toolbar: {
             show: false,
         },
         zoom: {
             enabled: false,
         },
         foreColor: theme.colors.gray[500]
     },
     grid: {
         show: false
     },
     dataLabels: {
         enabled: false,
     },
     tooltip: {
        enabled: false,
     },
     xasis: {
         type: "datetime",
         axisBorder: {
             color: theme.colors.gray[600]
         },
         axisTicks: {
            color: theme.colors.gray[600]
        },
        categories:[
            '2021-05-18T00:00:00.000Z',
            '2021-05-18T00:00:00.000Z',
            '2021-05-18T00:00:00.000Z',
            '2021-05-18T00:00:00.000Z',
            '2021-05-18T00:00:00.000Z',
            '2021-05-18T00:00:00.000Z',
        ],
     },
     fill:{
        opacity: 0.3,
        type: "gradient",
        gradient: {
           shade: "dark",
           opacityForm: 0.7,
           opacityTo: 0.3
        },
     },
};

const series = [
    { name: "seriesOne", data: [31, 120, 55, 10, 28, 109] }
]



export default function Dashboard (){
    return(
        <Flex direction="column" h="100vh">
            
            <Header />
           
            <Flex w="100%" my="6" maxBlockSize={1480} mx="auto" px="6">
                <Sidebar />

                <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start"> 
                    <Box
                      p={["6", "8"]}
                      bg="gray.800"
                      borderRadius={8}
                      pb="4"
                      >
                        <Text fontSize="lg" mb="4">Inscritos da Semana </Text>
                        <Charts options={options} series={series} type="area" height={160} />
                    </Box>
                    
                    <Box
                      p={["6", "8"]}
                      bg="gray.800"
                      borderRadius={8}
                      pb="4"
                      >
                        <Text fontSize="lg" mb="4">Taxa de Abertura</Text>
                        <Charts options={options} series={series} type="area" height={160} />
                    </Box>

                </SimpleGrid>    
            
            
            </Flex>

        </Flex>
    )
}