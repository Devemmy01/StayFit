// Importing necessary modules from React and React Router
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// Importing utility functions
import { fetchData, exerciseOptions, youtubeOptions } from '../utils/fetchData'

// Importing components
import Details from '../components/Details'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'


// Defining ExerciseDetail functional component
const ExerciseDetail = () => {
  // State variables
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState([])
  const {id} = useParams()

  // Effect hook to fetch exercise details and videos data
  useEffect(() => {
    const fetchExercisesData = async () => {
      // API URLs
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com"
      const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com"

      // Fetching exercise details
      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, 
      exerciseOptions)
      setExerciseDetail(exerciseDetailData)

      // Fetching exercise videos
      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions)
      setExerciseVideos(exerciseVideosData.contents)
    }

    fetchExercisesData()
  },[id])

  // Rendering JSX elements
  return (
    <div>
      {/* Details component */}
      <Details exerciseDetail={exerciseDetail} />
      {/* ExerciseVideos component */}
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      {/* SimilarExercises component */}
      <SimilarExercises />
    </div>
  )
}

// Exporting ExerciseDetail component
export default ExerciseDetail
