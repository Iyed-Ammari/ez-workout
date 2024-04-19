import Loader from '../components/Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import exercisesData from '../data/dummyData';
import { fetchData, youtubeOptions } from '../utils/fetchData';
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
    }, 500)
  }, []);







  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const exerciseDetailData = exercisesData.find(exercise => exercise.id === id);
    console.log(exerciseDetailData);
    setExerciseDetail(exerciseDetailData);

    const targetMuscleExercisesData = exercisesData.filter(exercise => exercise.target === exerciseDetailData.target);
    setTargetMuscleExercises(targetMuscleExercisesData);
    console.log(targetMuscleExercisesData);

    const equimentExercisesData = exercisesData.filter(exercise => exercise.equipment === exerciseDetailData.equipment);
    setEquipmentExercises(equimentExercisesData);
    console.log(equimentExercisesData);

    const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
    const fetchExercisesData = async () => {
      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);
    }
    fetchExercisesData();
  }, [id]);

  return loading? <Loader loading={loading} /> : (
    <Box>
      <Navbar />
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  );
}

export default ExerciseDetail