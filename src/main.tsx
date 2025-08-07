import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "@/App"
import "@/index.css"
import { SidebarProvider } from "@/context/SidebarContext"
import { ThemeProvider } from "@/context/ThemeContext"

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <SidebarProvider>
                    <App />
                </SidebarProvider>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
)

