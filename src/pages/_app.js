import '@/styles/globals.css'
import React from 'react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import Head from 'next/head'
import '@/styles/layout.css'
// eslint-disable-next-line import/no-extraneous-dependencies
import {Provider} from 'react-redux'
import store from '@/store'

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
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
            <Footer />
        </React.Fragment>)
}
