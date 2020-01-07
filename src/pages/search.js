import React from "react"
// import { accessSpreadsheet } from "../spreadsheet"
import Layout from '../components/layout'

const SearchPage = () => {
    var data = [
        {
            foodName: 'Built Custom Cheeseburger',
            allergins: 'Milk, Soy, Wheat Gluten'
        },
        {
            foodName: 'Ice Cream',
            allergins: 'Cow\'s Milk'
        },
        {
            foodName: 'Cookies',
            allergins: 'Nuts'
        },
        {
            foodName: 'Pastries',
            allergins: 'Nuts'
        },

    ]

    const [state, setState] = React.useState({
        filteredData: [],
        query: "",
      })

    const handleInputChange = event => {
        const query = event.target.value
        const filteredData = someData.filter(data => {
            const foodName = data.foodName
            const allergins = data.allergins
            return (
              foodName.toLowerCase().includes(query.toLowerCase()) ||
              allergins.toLowerCase().includes(query.toLowerCase())
            )
          })
          setState({
            query,
            filteredData,
          })
    }

    const { filteredData, query } = state
    const hasSearchResults = filteredData && query !== ""
    const someData = hasSearchResults ? filteredData : data

    return (
        <Layout>
            <h3>Search</h3>
            <input
              type="text"
              aria-label="Search"
              placeholder="Type to filter posts..."
              onChange={handleInputChange}
            />
            {
                someData.map(food => (
                    <p>{food.foodName} : {food.allergins}</p>
                ))
            }
        </Layout>
    )

}

export default SearchPage
