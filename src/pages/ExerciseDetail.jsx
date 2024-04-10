import Loader from '../components/Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import exercisesData from '../data/dummyData';
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';
import Navbar from '../components/Navbar';

const ExerciseDetail = () => {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, []);
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const exerciseDetailData = exercisesData.find(exercise => exercise.id === id);
    setExerciseDetail(exerciseDetailData);
  }, [id]);

  return loading? <Loader loading={loading} /> : (
    <Box>
      <Navbar />
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  );
}

export default ExerciseDetail