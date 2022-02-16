import { Icon, Link, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinkProps extends ChakraLinkProps{
    Icon: ElementType;
    children: string;
    
}

export function NavLink({ Icon, children, ...rest } :NavLinkProps){
    return (
        <Link display="flex" aling="center" {...rest}> 
            <Icon as={Icon} fontSize="20" />
            <Text ml="4" fontWeight="medium"> {children}</Text>
        </Link>
    );
}