import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import './layout.css'

const Layout = ({children}) => {
    return(
        <>
            <header>
                <Navigation/>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default Layout