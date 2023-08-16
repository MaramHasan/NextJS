import React, {useState} from 'react'
import styles from './Login.module.css'
import {useRouter} from 'next/router'
// eslint-disable-next-line import/no-extraneous-dependencies
import {useDispatch} from 'react-redux'
import {updateUserData} from '@/actions'

const Login = ({setIsLoggedIn}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()
    const dispatch = useDispatch()

    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = async(event) => {
        event.preventDefault()
        try {
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username,
                    password
                }),
            })

            const responseData = await response.json()
            if (responseData.message) {
                setError('Invalid username or password')
            } else {
                const expirationDate = new Date()
                expirationDate.setMinutes(expirationDate.getMinutes() + 1)
                // Set session cookies for isLoggedIn, username and password
                document.cookie = `isLoggedUser=${encodeURIComponent(true)};path=/;expires=${expirationDate.toUTCString()}`
                document.cookie = `username=${encodeURIComponent(username)};path=/;expires=${expirationDate.toUTCString()}`
                document.cookie = `password=${encodeURIComponent(password)};path=/;expires=${expirationDate.toUTCString()}`

                setIsLoggedIn(true)
                dispatch(updateUserData(responseData))
                router.push('/account', undefined, {shallow: true})
            }

        } catch (error) {
            setError('An error occurred')
        }
    }


    return (
        <div className={styles.loginContainer}>
            <h2>Login</h2>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={handleUsernameChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <button type="submit">Login</button>
                {error && <p className={styles.errorMessage}>{error}</p>}
            </form>
        </div>
    )
}

export default Login
