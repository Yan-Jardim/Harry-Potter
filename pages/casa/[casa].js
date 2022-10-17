import { Router, useRouter } from 'next/router'
import React from 'react'


export default function Casa() {

    const router = useRouter()

  return (
   <>
   teste{router.query.casa}
   </>
  )
}
