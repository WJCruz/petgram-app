import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { GET_SINGLE_PHOTO } from '../hoc/getSinglePhoto'

import { useQuery } from '@apollo/client'

export const PhotoCardWithQuery = ({ id }) => {
  console.log(id)
  const { loading, error, data } = useQuery(GET_SINGLE_PHOTO, {
    variables: {
      id
    }
  })
  if (error) {
    return <h2>Internal Server Error</h2>
  }
  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <PhotoCard {...data.photo} />
  )
}
