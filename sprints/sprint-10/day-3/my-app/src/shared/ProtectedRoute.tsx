import { Redirect, Stack, useRouter } from 'expo-router'
import React, { ReactNode } from 'react'
import { useAuth } from '../context/AuthContext'


export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { isLoggedIn } = useAuth()


  if (!isLoggedIn) {
    return   <Redirect href="/login" />;
  }

  return <>{children}</>
}
