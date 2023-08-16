import React from 'react'
import Footer from '@/components/layout/footer'
import Head from 'next/head'

export default function About() {
    return (
        <>
            <Head>
                <title> About Page</title>
                <meta name="description" content="some description text regarding the about page" />
            </Head>
            <h1>About page</h1>

        </>
    )
}

// Local layout (per page)
About.getLayout = function getPage(page) {
    return (
        <>
            {page}
            <Footer />
        </>
    )
}
