import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'



const IndexPage = () => {
    return (
        <Layout>
            <h2>About Us</h2>
            <p>
                We have designed a digital card to be used during checkout in grocery stores which serves as a master customer loyalty card, as well as a food allergy alert.
            </p>
            <h2>Goals</h2>
            <p>We aim to provide easy and accessibility to customers at grocery stores, essentailly serving as a single platfrom to which the customer is able to store all the data that would be used by a store, such as payment or store-based personal information.
            </p>
            <h2>Features</h2>
            <p>One of the key features of our product is that it stores personal store-based information about the consumer. This allows a store’s data system to instantly recognize if the product being sold could have any potential negative effects on the customer’s health and alerts the customer. In addition, the card provides a platform to store multiple reward programs and payment methods (loyalty cards, discount coupons, specialized payment options, etc) for ease of access without having to refer to multiple different sources at checkout
            </p>
            <h2>Aims</h2>
            <p>Our product is different in that it gives customers an added advantage of ease of access by having all their store-based information and multiple rewards programs in one place. Our digital card efficiently alerts customers at checkout if they are about to purchase an item hazardous to their health, as per the dietary restrictions saved in their profile. It also recognizes different food choices/lifestyle preferences and gives warnings if a product does not match with their needs. It even recommends an alternative item, available in the store, that fits the customer’s food preferences. Our design also gives a detailed display of the items the customer has bought and shows the customer what needs to be changed, and specifically for what reason. Additionally, our card doubles up as a storage platform by saving the customer’s payment information (with the customer’s consent). The payment information is secured utilizing a new encryption method known as tokenization, where the confidential payment information is converted into a random token, which is then used in the communications, allowing the information to be secure and impossible to be retrieved by hackers.
            </p>
            
        </Layout>

    )
}

export default IndexPage