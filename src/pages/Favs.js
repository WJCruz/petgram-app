import React from 'react'
import { useGetFavorites } from '../container/GetFavorites'
import { ListOfFavs } from '../components/ListOfFavs'
import { Layout } from '../components/Layout'

export const Favs = () => {
  const { loading, data, error } = useGetFavorites()
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>
  const { favs } = data

  return (
    <Layout title='Tus favoritos' subtitle='Aquí puedes encontrar tus favoritos'>
      <ListOfFavs favs={favs} />
    </Layout>
  )
}
