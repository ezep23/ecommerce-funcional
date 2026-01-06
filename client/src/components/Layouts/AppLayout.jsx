import { Outlet, ScrollRestoration } from "react-router"
import Navbar from './Navbar'
import Footer from './Footer'

export default function AppLayout(){
    return(
        <>
            <ScrollRestoration />
            
            <Navbar />

            <main>
                <Outlet />
            </main>

            <Footer />
        </>
    )
}