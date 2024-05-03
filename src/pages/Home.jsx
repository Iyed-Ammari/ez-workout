import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import Exercises from '../components/Exercises'
import SearchExercises from '../components/SearchExercises'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Loader from '../components/Loader'
import Fab from '@mui/material/Fab';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Home = ({setSiteAccessible}) => {
  
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, []);
  

  return (
    loading ? <Loader loading={loading}  /> : (
      <Box>
        <Navbar setSiteAccessible={setSiteAccessible}/>
        <HeroBanner />
        <SearchExercises setExercises={setExercises} bodyPart={bodyPart}  setBodyPart={setBodyPart} />
        <Exercises setExercises={setExercises} bodyPart={bodyPart}  exercises={exercises}/>
        <Footer />
        {
          localStorage.getItem("userType") === "user" ? (
            <Fab
            variant='extended'
            color='error'
            href='/calendar'
            sx={{
              backgroundColor: '#FF2625',
              position: 'fixed',
              bottom: '20px',
              right: '20px'
            }}
          >
            <CalendarMonthIcon />
            Calendar
          </Fab>
          ) :(null)
        }
      </Box>
      
    )
  );
}

export default Home