import React from 'react'
import { useParams } from 'react-router-dom'

const FeatureDetails = () => {
  const { id } = useParams()
  return (
    <div>
      <h1>Feature Details Page - {id}</h1>
    </div>
  )
}

export default FeatureDetails 