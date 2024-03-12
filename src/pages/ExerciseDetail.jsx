import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { fetchData, exerciseOptions } from '../utils/fetchData'

import Details from '../components/Details'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'


const ExerciseDetail = () => {

  const [exerciseDetail, setExerciseDetail] = useState({})
  const {id} = useParams()

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com"
      const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com"

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
      setExerciseDetail(exerciseDetailData)
    }

    fetchExercisesData()
  },[id])

  return (
    <div>
      <Details exerciseDetail={exerciseDetail} />
      <ExerciseVideos />
      <SimilarExercises />
    </div>
  )
}

export default ExerciseDetail