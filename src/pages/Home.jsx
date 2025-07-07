import React from 'react'
import Carousel from '../components/Carousel';
import About from './About';
import TrendingProducts from '../components/TrendingProducts';

function Home() {
  return (
    <div>
      <Carousel />
      <About />
      <TrendingProducts />
    </div>
  )
}

export default Home;