
import User from '../components/user'
import React from 'react'
export default function userList({usersData = {}}) {
    return (
        <><h1>List of users </h1>
            {
                usersData.map((user) => {
                    return (
                        <div key={user.id}>
                            <User user={user} />
                        </div>
                    )
                })
            }
        </>)
}

// eslint-disable-next-line func-style
export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    return {
        props: {
            usersData: data,
        },
    }
}
