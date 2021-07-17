import React from 'react'
import { useRouter } from 'next/router'

const avocado = () => {
  const router = useRouter()

  console.log(router)
  
  return (
    <div>
      <h1>Hey You are on the Avocado Section </h1>
    </div>
  )
}

export default avocado
