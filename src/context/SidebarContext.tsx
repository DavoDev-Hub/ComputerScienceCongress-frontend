import { createContext, useContext, useState, ReactNode } from "react"

type SidebarContextType = {
    collapsed: boolean
    toggleSidebar: () => void
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
    const [collapsed, setCollapsed] = useState(false)

    const toggleSidebar = () => setCollapsed((prev) => !prev)

    return (
        <SidebarContext.Provider value={{ collapsed, toggleSidebar }}>
            {children}
        </SidebarContext.Provider>
    )
}

export const useSidebar = () => {
    const context = useContext(SidebarContext)
    if (!context) {
        throw new Error("useSidebar must be used within a SidebarProvider")
    }
    return context
}

