import React, {useState} from 'react'

export default function CommentsPage() {
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')

    const loadComments = async() => {
        const response = await fetch('/api/comments')
        const data = await response.json()
        setComments(data)
    }

    const submitCommit = async() => {
        await fetch('/api/comments',
            {method: 'POST',
                body: JSON.stringify({comment}),
                headers: {
                    'Content-Type': 'application/json'
                }}
        )
    }

    const deleteComment = async(commentId) => {
        await fetch(`/api/comments/${commentId}`, {method: 'DELETE'})
        loadComments()
    }

    return (
        <React.Fragment>
            <input type="text" value={comment} placeholder="add comment" onChange={(e) => setComment(e.target.value)} />
            <button onClick={submitCommit}>Submit Comment</button>
            <button onClick={loadComments}>Load Comments</button>
            {comments.map((comment) => {
                return (
                    <div key={comment.id}>
                        <h2>{comment.id} {comment.text}</h2>
                        <button onClick={() => deleteComment(comment.id)}> Delete Comment</button>
                    </div>
                )
            })}
        </React.Fragment>
    )
}
