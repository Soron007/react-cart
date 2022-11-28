import { Link } from 'react-router-dom'
import React from 'react'
import { FiShoppingBag } from 'react-icons/fi'
import { useSelector } from 'react-redux'

const Header = () => {

    const { cartItems } = useSelector((state) => state.cart)

    return (
        <nav>

            <h2>SQUARE OF ARTS</h2>

            <div>
                <Link to={'/'}>Home</Link>
                <Link to={'/cart'}>
                    <FiShoppingBag />
                    <p>{cartItems.length}</p>

                </Link>

            </div>
        </nav>
    )
}

export default Header
