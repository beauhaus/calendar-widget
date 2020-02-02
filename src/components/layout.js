import React from 'react'
import { Link } from 'gatsby'

import '../styles/index.scss';

const Layout = ({children}) => {
    // console.log("layout ran")
    return (
        <div>
            {/* <header>This is the header</header> */}
            <Link to="/">Home Link</Link>
            {children}
            {/* <footer>This is the footer</footer> */}
        </div>
    )
}

export default Layout;