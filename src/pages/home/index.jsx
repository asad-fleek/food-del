import { useState } from 'react';
import ExploreMenu from '../../components/explore-menu';
import Header from '../../components/header';
import Navbar from '../../components/nav-bar';
import './style.css'
import FoodDisplay from '../../components/food-display';
import Footer from '../../components/footer';
import AppDownload from '../../components/app-download';

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <>
      <Navbar />
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
      <Footer />
    </>
  )
}

export default Home;