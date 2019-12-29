import React from "react"  
import { graphql, useStaticQuery} from "gatsby"

import footerStyles from './footer.module.css'

export const Footer = () => {
    const data = useStaticQuery(graphql`
    query FooterQuery{
        site{
            siteMetadata{
                author
            }
        }
    }
    `)

    return (
        <footer className={footerStyles.footer}>
             <p>Created by {data.site.siteMetadata.author}, © 2019</p>
        </footer>

    )
    
}

export default Footer