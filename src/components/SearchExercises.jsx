import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, Button, TextField } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";
import usePreventBodyScroll from "../hooks/usePreventBodyScroll";
import exercisesData, { users } from "../data/dummyData"
import { notFoundData } from "../data/dummyData";
import { bodyPartList } from "../data/dummyData";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const { disableScroll, enableScroll } = usePreventBodyScroll();
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState(bodyPartList);


 
  // useEffect(() => {
  //   const fetchExercisesData = async () => {
  //     const bodyParts = await fetchData(
  //       "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
  //       exerciseOptions
  //     );
  //     console.log("bodyParts", bodyParts);
  //     setBodyParts(["all", ...bodyParts]);
  //   };
  //   fetchExercisesData();
  // }, []);

  const handleSearch = async () => {
    setSearch(search.trim())
    if (search) {
      // const exercisesData = await fetchData(
      //   "https://exercisedb.p.rapidapi.com/exercises",
      //   exerciseOptions
      // );
      
      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search.trim())
               || item.target.toLowerCase().includes(search.trim())
               || item.equipment.toLowerCase().includes(search.trim())
               || item.bodyPart.toLowerCase().includes(search.trim()),
      );
      if(searchedExercises.length === 0){
        setExercises(notFoundData)
      } else {
        

        setSearch("");
        setExercises(searchedExercises);
      }
      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      console.log("fetched ", exercisesData);
      console.log("searched ", searchedExercises);
      
    }
  };

  return (
    <Stack
      alignItems={"center"}
      mt={"37px"}
      justifyContent={"center"}
      p={"20px"}
    >
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
        mb={"50px"}
        textAlign={"center"}
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position={"relative"} mb={"72px"}>
        <TextField
          sx={{
            input: {
              fontWeight: 700,
              border: "none",
              borderRadius: "4px",
            },
            width: {
              lg: "800px",
              xs: "350px",
            },
            backgroundColor: "#FFF",
            borderRadius: "40px",
          }}
          height={"76px"}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder={"Search Exercises"}
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#FFF",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          p: "20px",
        }}
        onMouseEnter={disableScroll}
        onMouseLeave={enableScroll}
      >
        <HorizontalScrollbar
          data={bodyParts}
          bodyParts
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          setExercises={setExercises}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
