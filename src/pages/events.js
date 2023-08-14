import React, {useState} from 'react'
import {useRouter} from 'next/router'

export default function EventList({eventList}) {
    const [filteredData, setFilteredData] = useState(eventList)
    const router = useRouter()

    const fetchSportsEvent = async() => {
        const resp = await fetch('http://localhost:4000/events?category=sports')
        const data = await resp.json()
        setFilteredData(data)
        router.push('/events?category=sports', undefined, {shallow: true})
    }

    return (
        <>
            <button onClick={fetchSportsEvent}>Sports events</button>
            <h1>List of events</h1>
            {filteredData.map((eventData) => {
                return (
                    <div key={eventData.id}>
                        <h2>
                            {eventData.id} {eventData.title} {eventData.date} | {eventData.category}
                        </h2>
                        <p>{eventData.description}</p>
                        <hr />
                    </div>
                )
            })
            }</>

    )

}
// eslint-disable-next-line func-style
export async function getServerSideProps(context) {
    const {query} = context
    const {category} = query
    const queryString = category ? 'category=sports' : ''
    const resp = await fetch(`http://localhost:4000/events?${queryString}`)
    const data = await resp.json()
    return {
        props: {
            eventList: data
        }
    }
}
