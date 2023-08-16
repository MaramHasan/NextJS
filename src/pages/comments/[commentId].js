import React from 'react'
import {comments} from '../../data/index'

export default function CommentDetails({comment}) {
    return (
        <React.Fragment>
            {comment.id} - {comment.text}
        </React.Fragment>
    )
}

// eslint-disable-next-line func-style
export async function getStaticPaths() {
    return {
        paths: [
            {params: {
                commentId: '1'
            }},
            {params: {
                commentId: '2'
            }},
            {params: {
                commentId: '3'
            }},
        ],
        fallback: false
    }
}

// eslint-disable-next-line func-style
export async function getStaticProps(context) {
    const {params} = context
    const {commentId} = params
    const comment = comments.find((comment) => comment.id === parseInt(commentId))
    return {
        props: {
            comment
        }
    }
}
