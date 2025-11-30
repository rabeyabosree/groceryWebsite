import React from 'react'
import Navbar from './../../components/common/Navbar';
import Hero from './../../components/common/Hero';
import Categoreis from './Categoreis';
import FeaturedProducts from './FeaturedProducts';
import Videos from './Videos';
import MobileApp from './MobileApp';
import Testimonals from './Testimonals';
import TopPicks from './TopPicks';
import Footer from './../../components/common/Footer';
import AllProducts from './../AllProducts';
import CategoryCard from '../../components/CategoryCard';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CategoryCard />
      <FeaturedProducts />
      <Videos />
      <TopPicks />
      <Testimonals />
      <Footer />
    </>
  )
}

export default Home