import Link from 'next/link'
import React from 'react'
import {useRouter} from 'next/router'
import Head from 'next/head'

export default function Home() {
    const router = useRouter()
    const handleClick = () => {
        console.log('done!!!!!!!')
        router.replace('/products')
    }

    return (
        <div>
            <Head>
                <title>Home page</title>
                <meta name="description" content="some text regarding the home page description" />
            </Head>
            <h1>Home page</h1>
            <Link href="/blog">
                <h1>Blog</h1>
            </Link>
            <Link href="/products">
                <h2>Products</h2>
            </Link>
            <Link href="/posts">
                <h2>Post Page</h2>
            </Link>
            <button onClick={handleClick}>Place Order</button>
        </div>
    )
}
