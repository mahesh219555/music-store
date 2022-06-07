import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import { Box } from '@mui/material'
import { fetchProductData } from '../dataFetching'
import ProductDisplay from '../components/ProductDisplay'

const Home = () => {
  const [productData, setProductData] = useState([])
  
  useEffect(() => {
    fetchProductData()
      .then(data => setProductData(data))
      .catch(err => console.log('error: ', err))
    }, [])
    console.log(productData)
    
    return (
        <Box width={1} display="flex" flexDirection="column" alignItems="center">
          {productData.map(product => <Box width="375px" maxWidth="100%" m={4} key={product.id}><ProductDisplay product={product}/></Box>)}
        </Box>
    )
}

export default Home