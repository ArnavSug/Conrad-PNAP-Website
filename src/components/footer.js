import React from "react"  
import { graphql, useStaticQuery} from 'gatsby'

import footerStyles from './footer.module.css'
const Footer = () => {
    /*const data = useStaticQuery(graphql
    query {
        site{
            siteMetadata{
                author
            }
        }
    }
    )*/

    return (
        <footer className={footerStyles.footer}>
             <p>Created by Author, © 2019</p>
        </footer>

    )
    //{data.site.siteMetadata.author}
}

export default Footer