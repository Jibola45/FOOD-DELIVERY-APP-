import React, { useState } from 'react'
import './Home.css'
import ExploreMenu from '../../Components/Explore Menu/ExploreMenu'
import Header from '../../Components/Header/Header'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'




const Home = () => {

const[category,setCategory] = useState("All");

  return (
    <div>
     <Header/>
      <ExploreMenu category={category}  setCategory={setCategory} />
    <FoodDisplay category={category}  />
    </div>
  )
}

export default Home