'use client'
import React, { Children } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const QueryProvider = ({children}:{children:React.ReactNode}) => {
    const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
  )
}

export default QueryProvider