import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import {useSelector} from 'react-redux'
import styles from '@/styles/MyAccount.module.css'

export default function MyAccount({loggedUserData}) {
    let userData = useSelector((state) => state.user.userData)

    if (Object.keys(userData).length === 0) {
        userData = loggedUserData
    }

    return (
        <div className={styles.container}>
            <div className={styles.profileCard}>
                <div className={styles.imageContainer}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={userData.image}
                        alt={`${userData.firstName}_image`}
                        className={styles.profileImage}
                    />
                </div>
                <div className={styles.details}>
                    <h1 className={styles.name}>
                        Hello {userData.firstName} {userData.lastName}
                    </h1>
                    <h3 className={styles.email}>Email: {userData.email}</h3>
                    <h3 className={styles.gender}>Gender: {userData.gender}</h3>
                </div>
            </div>
        </div>
    )
}

// eslint-disable-next-line func-style
export async function getServerSideProps(context) {
    const {req} = context
    const cookies = req.headers.cookie || ''
    const isLoggedInCookie = cookies
        .split(';')
        .find((cookie) => cookie.trim().startsWith('isLoggedUser='))

    const usernameCookie = cookies
        .split(';')
        .find((cookie) => cookie.trim().startsWith('username='))

    const passwordCookie = cookies
        .split(';')
        .find((cookie) => cookie.trim().startsWith('password='))

    const isLoggedIn = isLoggedInCookie ? isLoggedInCookie.split('=')[1] === 'true' : false
    const username = usernameCookie ? decodeURIComponent(usernameCookie.split('=')[1]) : ''
    const password = passwordCookie ? decodeURIComponent(passwordCookie.split('=')[1]) : ''

    if (isLoggedIn) {
        const response = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username,
                password
            }),
        })

        const responseData = await response.json()
        return {
            props: {
                loggedUserData: responseData,
            },
        }
    } else {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
            props: {
                loggedUserData: null,
            },
        }
    }
}
