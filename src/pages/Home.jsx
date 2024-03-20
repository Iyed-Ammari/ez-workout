import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import Exercises from '../components/Exercises'
import SearchExercises from '../components/SearchExercises'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Loader from '../components/Loader'

const Home = () => {
  
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, []);
  

  return (
    loading ? <Loader loading={loading}  /> : (
      <Box>
        <Navbar/>
        <HeroBanner />
        <SearchExercises setExercises={setExercises} bodyPart={bodyPart}  setBodyPart={setBodyPart} />
        <Exercises setExercises={setExercises} bodyPart={bodyPart}  exercises={exercises}/>
        <Footer />
      </Box>
    )
  );
}

export default Home