import Link from 'next/link'
import React from 'react'
export default function postList({posts}) {
    return (
        <>
            <div>
                <h1>Posts Lists:</h1>
            </div>
            {posts.map((post) => {
                return (
                    <div key={post.id}>
                        <Link href={`posts/${post.id}`}>
                            <h3>{post.id}: {post.title}</h3>
                        </Link>
                        <hr />
                    </div>
                )
            })}
        </>
    )
}

// eslint-disable-next-line func-style
export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    return {
        props: {
            posts: data.slice(0, 3)
        }
    }
}
