import React from 'react'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
import { ListOfCategories } from '../components/ListOfCategories'
import { useParams } from 'react-router-dom'
import { Layout } from '../components/Layout'

export const Home = () => {
  const params = useParams()
  return (
    <Layout title='Tu app de fotos de mascotas' subtitle='Con Petgram puedes encontrar fotos de mascotas muy bonitos'>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={params.categoryId} />
    </Layout>
  )
}
