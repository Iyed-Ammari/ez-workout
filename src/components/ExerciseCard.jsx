import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return exercise.name === "not found" ? (
    <Box >
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy"  />
    </Box>
  ) : (
    <Link to={`/exercise/${exercise.id}`} className="exercise-card">
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" title={exercise.name}    />
    </Link>
  );
};

export default ExerciseCard;
