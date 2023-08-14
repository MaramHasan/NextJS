import {comments} from '../../../data/index'

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(comments)
    } else if (req.method === 'POST') {
        const {comment} = req.body
        const newComment = {
            id: comments.length + 1,
            text: comment
        }
        comments.push(newComment)
    }
}
