import React from 'react'
export default function NewsList({articles}) {
    return (
        <>
            <h1>List of News Articles</h1>
            {articles.map((article) => {
                return (
                    <div key={article.id}>
                        <h3>{article.id}: {article.title} | {article.category}</h3>
                        <hr />
                    </div>
                )

            })}
        </>
    )
}

// eslint-disable-next-line func-style
export async function getServerSideProps() {
    const resp = await fetch('http://localhost:4000/news')
    const data = await resp.json()
    return {
        props: {
            articles: data
        }
    }
}
