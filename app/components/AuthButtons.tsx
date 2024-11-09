'use client'

import { Button } from '@/components/ui/button'
import { signIn, signOut } from 'next-auth/react'

export function LoginButton() {
  return (
    <Button onClick={() => signIn('github')} type="button">
      Login
    </Button>
  )
}

export function LogoutButton() {
  return (
    <Button onClick={() => signOut()} type="button">
      Logout
    </Button>
  )
}
