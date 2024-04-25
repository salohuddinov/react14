import React, { useEffect, useState } from 'react'
import axios from '../../api'
import Products from '../../components/products/Products'
import Hero from '../../components/hero/Hero'
import Main from '../../components/main/Main'

const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get("products")
      .then(res => setData(res.data.products))
      .catch(res => console.log(res))
  }, [])
  return (
    <div>
      <div className="container">
        <Hero />
        <Main />
        <Products title={"Yangi mahsulotlar"} data={data} />
      </div>
    </div>
  )
}

export default Home