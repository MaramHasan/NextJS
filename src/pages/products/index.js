import Link from 'next/link'
import React from 'react'
export default function Product({productId = 1}) {
    return (
        <>
            <h1>Product page</h1>
            <div>
                <Link href={`/products/${productId}`} replace><h1>Product 1</h1></Link>
                <Link href={`/products/${productId}`}><h1>Product 2</h1></Link>
                <Link href={`/products/${productId}`}><h1>Product 3</h1></Link>
            </div>
            <Link href="/">
                <p>
                go back home
                </p>
            </Link>
        </>
    )
}
