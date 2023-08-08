import React from 'react'
export default function EventList({eventList}) {
    return (
        <>
            <h1>Event List</h1>
            {eventList.map((eventData) => {
                return (
                    <div />
                )
            })
            }</>

    )

}
// eslint-disable-next-line func-style
export async function getServerSideProps() {
    const resp = await fetch()
    const data = await resp.json()
    return {
        props: {
            eventList: data
        }
    }
}
