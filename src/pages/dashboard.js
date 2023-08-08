import React, {useState, useEffect} from 'react'

export default function Dashboard() {
    const [isLoading, setisLoading] = useState(true)
    const [dashboardData, setDashboardData] = useState(null)

    useEffect(() => {
        // eslint-disable-next-line func-style
        async function fetchDashboardData() {
            const resp = await fetch('http://localhost:4000/dashboard')
            const data = await resp.json()
            setDashboardData(data)
            setisLoading(false)
        }
        fetchDashboardData()
    }, []) // we need thisfunction to be bunned only on component did mount
    return (
        <>
            <div>The content is ready ?
                {isLoading ? 'No, loading .....' :
                    <>
                     `Yes ${dashboardData.name}`
                        <div>posts#: {dashboardData.posts}</div>
                        <div>posts#: {dashboardData.posts}</div>
                        <div>posts#: {dashboardData.posts}</div>
                        <div>posts#: {dashboardData.posts}</div>
                    </>
                }
            </div>
        </>
    )
}
