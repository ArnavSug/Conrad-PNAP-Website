import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'

    const AboutPage = () => {
        return (
                <Layout>
                <h2>Here is a little info on us</h2>
                <p>Our company (team) consists of 5 members: Arnav (TITLE), Aditya (TITLE), Nishvath (TITLE), Dhruv (TITLE), and Aman (TITLE). Our company started from a group of friends interested in the cyber-tech field with a willingness to take on the challenge of solving some of the mainstream technological problems in today’s society. Since we started, some of the biggest hurdles we’ve overcome was determining what our product would be and accomplish in general, how we would designate tasks to get all the tasks complete, and designing a fool-proof way to secure people’s health free from common allergens.</p>
                <p><Link to="/contact">Find us here!</Link></p>
               </Layout> 
        )

        }
 export default AboutPage