import '@/styles/globals.css'
import React from 'react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import Head from 'next/head'
import '@/styles/layout.css'

export default function App({Component, pageProps}) {
    if (Component.getLayout) {
        return (Component.getLayout(<Component {...pageProps} />))
    }
    return (
        <React.Fragment>
            <Head>
                <title>any Title</title>
                <meta name="description" content="any content about the page not specific the description content" />
            </Head>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </React.Fragment>)
}
