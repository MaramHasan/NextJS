
import {useRouter} from 'next/router'
import React from 'react'
export default function ProductDetails() {
    const router = useRouter()
    const productId = router.query.productId // the name is the same as the name betweeen []
    return <h1>Product Details page {productId}</h1>
}
