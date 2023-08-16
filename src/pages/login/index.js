import React, {useState} from 'react'
import Login from '@/components/login/index'

export default function LoginPage({isLoggedUser}) {
    const [isLoggedIn, setIsLoggedIn] = useState(/true/.test(isLoggedUser))
    return (
        <>
            {!isLoggedIn && <div><Login setIsLoggedIn={setIsLoggedIn} /></div>}
        </>
    )
}

// eslint-disable-next-line func-style
export async function getServerSideProps(context) {
    const {req, res} = context
    const cookies = req.headers.cookie || ''
    const parsedCookies = cookies.split(';').reduce((acc, cookie) => {
        const [key, value] = cookie.split('=')
        acc[key.trim()] = value
        return acc
    }, {})

    const {isLoggedUser} = parsedCookies || {}
    if (!/true/.test(isLoggedUser)) {
        res.setHeader('Set-Cookie', ['isLoggedUser=false'])
    }

    return {
        props: {
            isLoggedUser: isLoggedUser ? isLoggedUser : 'false'
        }
    }
}

