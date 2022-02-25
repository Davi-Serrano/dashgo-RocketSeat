import { Box, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

type  PaginationProps = {
    totalCountsOfRegisters: number;
    registersPerPage?: number;
    currentPage?: number;
    onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePageArray(from: number, to: number){
    return [...new Array(to - from)]
        .map((_, index)=> {
            return from + index + 1
        })
        .filter(page => page > 0)
}

export function Pagination({
    totalCountsOfRegisters,
    registersPerPage = 10,
    currentPage = 1,
    onPageChange,
}: PaginationProps){

    const lastPage = Math.floor(totalCountsOfRegisters/ registersPerPage);
    
    const previousPage = currentPage > 1
        ? generatePageArray(currentPage - 1 - siblingsCount, currentPage - 1)
        :[]
    
    const nextPages = currentPage < lastPage
        ? generatePageArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
        :[]

    return (
        <Stack
            direction={["column", "row"]}
            spacing="6"
            mt="8"
            justify="space-between"
            align="center"
        >
        
        <Box> 
            <strong> 0 </strong> - <strong> 10 </strong> de <strong> 100 </strong> 
        </Box>
            <Stack direction="row">

                {currentPage >  (1 + siblingsCount) && (
                    <>
                        <PaginationItem onPageChange={onPageChange} numberPage={1} />
                        {currentPage + (2 + siblingsCount ) && 
                        <Text color="gray.300" w="8" textAlign="center">...</Text>}
                    </>
                )}

                {previousPage.length > 0 && previousPage.map(page =>{
                    return <PaginationItem onPageChange={onPageChange} key={page} numberPage={page} />
                })}

                <PaginationItem onPageChange={onPageChange} isCurrent numberPage={currentPage} /> 
                
                {nextPages.length > 0 && nextPages.map(page =>{
                    return <PaginationItem onPageChange={onPageChange} key={page} numberPage={page} />
                })}

                {currentPage + siblingsCount <  lastPage && (
                    <>
                        {(currentPage + 1 + siblingsCount) < lastPage && ( 
                            <Text color="gray.300" w="8" alignContent="center">...</Text>
                        )}
                        <PaginationItem onPageChange={onPageChange} numberPage={lastPage} />
                    </>
                )}
            </Stack>
        </Stack>
    );
}