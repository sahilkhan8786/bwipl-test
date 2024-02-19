import { useContext, useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { UserContext } from '../context/UserContext';
import { Link } from 'react-router-dom';
const Header = () => {
    const { setSearchURL, user, cart } = useContext(UserContext)
    const [inputData, setInputData] = useState('')



    const formSubmit = (e) => {
        e.preventDefault();

        setSearchURL(inputData)
    }

    return (
        <div className='p-4 border-b border-black max-[425px]:p-1'>

            <header className='m-4 p-4 flex justify-between h-12 items-center max-w-[1440px] mx-auto max-[425px]:m-1 max-[425px]:p-2'>
                <div className='w-1/2 bg-white  shadow rounded-lg overflow-hidden max-[900px]:w-3/4 '>
                    <form onSubmit={formSubmit} className='flex items-center justify-center'>
                        <input type="text" placeholder='Search' className='w-full  px-4 py-2 border-r' value={inputData}
                            onChange={e => setInputData(e.target.value)} />
                        <FaSearch className='text-2xl cursor-pointer w-1/12 max-[500px]:w-3/12' />
                    </form>
                </div>
                <div className='flex items-center justify-center gap-4'>
                    <Link to={'/user/cart'} className='relative' >
                        <FaCartShopping className='text-2xl cursor-pointer' />
                        {cart.length > 0 && (
                            <div className='absolute -top-2 -right-3  w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center shadow-black shadow cursor-pointer'>{cart.length}</div>
                        )}
                    </Link>
                    <div className='flex items-center justify-center  bg-white cursor-pointer border rounded-full overflow-hidden w-10 h-10 shadow-sm shadow-black max-[600px]:hidden'>
                        <img src={user.image} alt="avatar" className=' w-6 ' />
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header