import { Stack, useRouter } from 'expo-router'
import React, { ReactNode } from 'react'
import { useAuth } from '~/context/AuthContext'

export const ProtectedRoute = ({ children }: { children: any }) => {
  const { isLoggedIn } = useAuth()
  const router =useRouter()

  if (!isLoggedIn) {
    return <Stack.Screen name='login' />
  }

  return <>{children}</>
}
