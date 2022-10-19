import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client'
import { AppProvider } from './context/AppContext'
import { setContext } from '@apollo/client/link/context'

import { App } from './app'

const httpLink = createHttpLink({
  uri: 'https://petgram-server-wjavier-hao6t5hzm-wildercruza-unipe.vercel.app/graphql'
})

const authLink = setContext((_, { headers }) => {
  const token = window.sessionStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

// inicializamos el cliente
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)
root.render(
  <AppProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </AppProvider>
)
