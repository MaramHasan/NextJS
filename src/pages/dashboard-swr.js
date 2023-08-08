import useSWR from 'swr'
import React from 'react'
const fetcher = async() => {
    const resp = await fetch('http://localhost:4000/dashboard')
    const data = await resp.json()
    return data
}
export default function DashboardSWR() {
    const {data, error} = useSWR('maram', fetcher)
    if (error) {
        return (
            'An error exists'
        )
    }
    if (!data) {
        return ('Loading ...')
    }
    return (
        <>
        `Yes ${data.name}`
            <div>posts#: {data.posts}</div>
            <div>following#: {data.following}</div>
            <div>followers#: {data.followers}</div>
            <div>likes#: {data.likes}</div>
        </>
    )
}
