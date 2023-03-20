import { Outlet } from "react-router-dom"
import NavBar from "../sections/Nav"

export const NavLayout = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}