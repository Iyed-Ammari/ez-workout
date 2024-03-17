import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import Exercises from '../components/Exercises'
import SearchExercises from '../components/SearchExercises'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = ({userType, setUserType}) => {
  
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  


  return (
    <Box >
      <Navbar  userType={userType} setUserType={setUserType}/>
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart}  setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} bodyPart={bodyPart}  exercises={exercises}/>
      <Footer />
    </Box>
  )
}

export default Home