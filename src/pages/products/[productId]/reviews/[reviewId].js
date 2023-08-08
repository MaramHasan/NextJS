
import {useRouter} from 'next/router'
import React from 'react'
export default function ProductDetails() {
    const router = useRouter()
    const {reviewId, productId} = router.query // the name is the same as the name betweeen []
    return <h1>Product Details {productId} Review page {reviewId}</h1>
}
