export default function handler(req, res) {
    res.setPreviewData({user: 'Maram'})
    // res.end('Preview Mode Enabled')
    res.redirect(req.query.redirect)
}
