import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout() {
    return (
        <>
            <Header />
            <main>
                <Navbar />
                <Outlet />
            </main>
            <Footer />
        </>
    )
}