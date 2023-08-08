import React from 'react'
export default function ArticleListByCategory({filteredData, category}) {
    return (
        <>
            <h1>showing news for {category}</h1>
            {filteredData.map((article) => {
                return (
                    <div key={article.id}>
                        <h3>{article.id} : {article.title} | {article.category}</h3>
                        <p>{article.description}</p>
                        <hr />
                    </div>
                )
            })}
        </>
    )
}
// eslint-disable-next-line func-style
export async function getServerSideProps(context) {
    const {params, req, res, query} = context
    const {category} = params
    console.log(req.headers.cookie, query)

    res.setHeader('Set-Cookie', ['name=Maram'])
    const resp = await fetch(`http://localhost:4000/news?category=${category}`)
    const data = await resp.json()
    return {
        props: {
            filteredData: data,
            category
        }
    }
}
