import React from 'react';
import { AiFillDelete } from 'react-icons/ai'
import { useSelector } from 'react-redux';

const CartItems = ({ imgSrc, name, price, qty, decrement, increment, deleteHandler, id }) => {

    const { subTotal } = useSelector((state) => state.cart)

    return (
        <div className='cartItem'>
            <img src={imgSrc} alt="Item" />
            <article>
                <h3>{name}</h3>
                <p>${subTotal}</p>
            </article>

            <div>
                <button onClick={() => increment(id)}>+</button>
                <p>{qty}</p>
                <button onClick={() => decrement(id)}>-</button>


            </div>

            <AiFillDelete onClick={() => deleteHandler(id)} />
        </div>
    )
}

export default CartItems
