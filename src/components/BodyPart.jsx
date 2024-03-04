import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";
import exercisesData, { notFoundData } from "../data/dummyData";

const BodyPart = ({ item, setBodyPart, bodyPart, setExercises}) => 
{
  const handleSearch = async (search) => {
    if (search === 'all') {
      const searchedExercises = exercisesData
      setExercises(searchedExercises);
    }else if (search){
      // const exercisesData = await fetchData(
      //   "https://exercisedb.p.rapidapi.com/exercises",
      //   exerciseOptions
      // );
      
      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );
      if(searchedExercises.length === 0){
        setExercises(notFoundData)
      } else {
        

        setExercises(searchedExercises);
      }
      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      console.log("fetched ", exercisesData);
      console.log("searched ", searchedExercises);
      
    }
  };
  return (
  
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={
      bodyPart === item
        ? {
            borderTop: "4px solid #FF2625",
            background: "#fff",
            borderBottomLeftRadius: "20px",
            width: "270px",
            height: "282px",
            cursor: "pointer",
            gap: "47px",
          }
        : {
            background: "#fff",
            borderBottomLeftRadius: "20px",
            width: "270px",
            height: "282px",
            cursor: "pointer",
            gap: "47px",
          }
    }
    onClick={() => {
      setBodyPart(item);
      handleSearch(item)
      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: "40px", height: "40px" }} />
    <Typography
      fontSize="24px"
      fontWeight="bold"
      fontFamily="Alegreya"
      color="#3A1212"
      textTransform="capitalize"
    >
      {" "}
      {item}
    </Typography>
  </Stack>
);
}
export default BodyPart;
