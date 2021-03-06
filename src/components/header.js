import React from "react"
import { Link, graphql, useStaticQuery  } from "gatsby"

import headerStyles from './header.module.css'

export const Header = () => {
    const data = useStaticQuery(graphql`
    query HeaderQuery{
        site {
            siteMetadata {
                title
            }
        }
    }
    `)
    return (
        <header className={headerStyles.header}>   
            <h1>
                <Link className={headerStyles.title} to="/">
                {data.site.siteMetadata.title}
                </Link>
            </h1>
            <nav>  
                <ul className={headerStyles.navList}>
                    <li>
                        <Link className ={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link>
                    </li>
                    <li>
                        <Link className ={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/apply">Apply</Link>
                    </li>
                    <li>
                        <Link className ={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link>
                    </li>
                    <li>
                        <Link className ={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link className ={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/search">Search</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header