import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'

    const AboutPage = () => {
        return (
                <Layout>
                <h2>Here is a little info on us</h2>
                <p>We are a small team of five Indian highschools just out here vibing man</p>
                <p><Link to="/contact">Find us here!</Link></p>
               </Layout> 
        )

        }
 export default AboutPage