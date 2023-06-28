import { useEffect } from 'react'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import './test-button.css'

interface ButtonProps {
  testId: string
  label: string
  text?: string
  href?: string
  primary?: boolean
  'data-testid'?: string
}

type Profile = {
  id: number
  bio: string
  location: string
  name: string
  profileImageUrl: string
  userName: string
  website: string
}

export const Profile = ({ testId, label, text, href, primary = false, ...props }: ButtonProps) => {
  const [currentUser, setCurrentUser] = useState<Profile>()

  useEffect(() => {
    fetch('/api/current')
      .then((response) => {
        return response.json()
      })
      .then((data: Profile) => {
        return setCurrentUser(data)
      })
  }, [])

  return (
    <div>
      <text>{currentUser?.id}</text>
      <text>{currentUser?.location}</text>
      <text>{currentUser?.bio}</text>
      <text>{currentUser?.name}</text>
      <text>{currentUser?.userName}</text>
      <text>{currentUser?.website}</text>
    </div>
  )
}
