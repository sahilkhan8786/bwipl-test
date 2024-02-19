import { useContext, useState } from "react"
import { Navigate } from 'react-router-dom'
import { UserContext } from "../context/UserContext"
import axios from 'axios'
const Login = () => {
    const { setUser } = useContext(UserContext)


    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredPassword, setEnteredPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [isError, setIsError] = useState(false)
    const [redirect, setRedirect] = useState(false)

    const loginHandler = async (e) => {
        e.preventDefault();
        try {
            if (!enteredUsername || !enteredPassword) {
                setIsError(true)
                return setErrorMessage("fill all credentials")
            }


            const { data } = await axios.post('https://dummyjson.com/auth/login', {

                username: 'kminchelle',
                password: '0lelplR',
                // expiresInMins: 60, // optional
            })
            if (data.username === enteredUsername && enteredPassword === '0lelplR') {
                window.localStorage.setItem('token', data.token)
                setUser(data)
                return setRedirect(true)
            }

            setIsError(true)
            return setErrorMessage("Invalid credentials")



        } catch (error) {
            setIsError(true)
            return setErrorMessage("Internal server error! Try again later")
        }
    }


    if (redirect) {
        return <Navigate to='/' />
    }

    return (
        <div className="block max-w-md mx-auto">
            <div className="mt-16">

                <h1 className="text-center text-4xl mb-16">Login Form</h1>


                <form className="flex flex-col gap-4  items-center"
                    onSubmit={loginHandler}
                >
                    <input type="text" placeholder="username" className="input" value={enteredUsername}
                        onChange={e => setEnteredUsername(e.target.value)}
                    />
                    <input type="password" placeholder="password" className="input"
                        value={enteredPassword}
                        onChange={e => setEnteredPassword(e.target.value)}
                    />
                    {isError && (
                        <div className="text-center mb-3 text-red-600">{errorMessage}</div>
                    )}
                    <button type="submit" className="bg-blue-500 px-4 py-2 text-white w-1/2">login</button>
                </form>
            </div>
        </div>
    )
}

export default Login