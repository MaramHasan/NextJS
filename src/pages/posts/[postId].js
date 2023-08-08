import React from 'react'
export default function Post({postData}) {
    return (
        <div>
            <h1>{postData.title}</h1>
            <div>
                <p>
                    {postData.body}
                </p>
            </div>
        </div>
    )
}

// eslint-disable-next-line func-style
export async function getStaticPaths() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    const paths = data.slice(0, 3).map((post) => {
        return {
            params: {
                postId: `${post.id}`
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}

// eslint-disable-next-line func-style
export async function getStaticProps(context) {
    const {params} = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json()
    return {
        props: {
            postData: data
        }
    }
}
