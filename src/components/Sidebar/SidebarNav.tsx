import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitBranchLine, RiInputMethodLine } from "react-icons/ri";

import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav(){
    return(
        <Stack spacing="12" align="flex-start">
            <NavSection title="Geral">
                <NavLink Icon={RiDashboardLine} href="/dashboard">Dashboard</NavLink>
                <NavLink Icon={RiContactsLine } href="/users">Usuários</NavLink>
            </NavSection>

            <NavSection title="Automação">
                <NavLink Icon={RiInputMethodLine} href="/forms" >Formulários</NavLink>
                <NavLink Icon={RiGitBranchLine} href="/automation">Automação</NavLink>
            </NavSection>
        </Stack>
    )
}