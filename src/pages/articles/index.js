import React from 'react'
export default function ArticlesList({data}) {
    return (
        <h1>{data}</h1>
    )
}

// eslint-disable-next-line func-style
export async function getStaticProps(context) {
    return {
        props: {
            data: context.preview ? context.previewData.user : 'List of published articles'
        }
    }
}

