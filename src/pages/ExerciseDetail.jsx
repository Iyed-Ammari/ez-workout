import React from 'react'
import Loader from '../components/Loader';

const ExerciseDetail = () => {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, []);
  return loading? <Loader loading={loading} /> : (
    <div>ExerciseDetail</div>
  )
}

export default ExerciseDetail