import {useRouter} from 'next/router'
import React from 'react'

export default function Docs() {
    const router = useRouter()
    const {params} = router.query
    console.log(params)
    return <h1>Docs Home Page</h1>
}

