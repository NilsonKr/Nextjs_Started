import React from 'react'
import { useRouter } from 'next/router'

const ProductId = () => {
  const router = useRouter()

  console.log(router)

  return (
    <div>
      <h1>hey!!!! this is your product id: </h1>
    </div>
  )
}

export default ProductId
