import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { Link } from "react-router-dom"
import Products from "../components/Products"

const Home = () => {
    const { user } = useContext(UserContext)

    if (!user) {
        return (
            <div className="h-40 flex flex-col gap-2 items-center justify-center">
                <p>
                    You should login to see Products.
                </p>
                <span>Go to login page:-
                    <Link to={'/login'} className="underline font-bold">click here</Link>

                </span>
            </div>
        )
    }
    return (
        <>
            <Products />
        </>
    )
}

export default Home