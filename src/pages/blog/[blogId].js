import React from 'react'
import Head from 'next/head'

export default function Blog({title, description}) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>
            <h1>Article for {process.env.NEXT_PUBLIC_NAME}</h1>
        </>
    )
}

// eslint-disable-next-line func-style
export async function getServerSideProps() {
    // const user = process.env.DB_USER
    // const password = process.env.DB_PASSWORD
    return {
        props: {
            title: 'Article Title',
            description: 'Article Description'
        }
    }
}
