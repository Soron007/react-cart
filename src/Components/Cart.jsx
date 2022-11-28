import React from 'react';
import CartItems from './CartItems';

import { useDispatch, useSelector } from 'react-redux';






const Cart = () => {

    const { cartItems, subTotal, shipping, tax, total } = useSelector((state) => state.cart)
    const dispatch = useDispatch();

    const increment = (id) => {
        dispatch({
            type: 'addToCart',
            payload: { id }
        });
        dispatch({ type: 'calculatePrice' });
    }

    const decrement = (id) => {
        dispatch({
            type: 'decrement',
            payload: id
        })

        dispatch({ type: 'calculatePrice' });
    }

    const deleteHandler = (id) => {
        dispatch({
            type: 'deleteHandler',
            payload: id
        });
        dispatch({ type: 'calculatePrice' });
    }


    return (
        <div className='cart'>

            <main>

                {
                    cartItems.length > 0 ? cartItems.map((items) => (
                        <CartItems
                            key={items.id}
                            imgSrc={items.imgSrc}
                            name={items.name}
                            price={items.price}
                            qty={items.quantity}
                            id={items.id}
                            increment={increment}
                            decrement={decrement}
                            deleteHandler={deleteHandler}


                        />
                    )) : (<h1>No Items in Cart</h1>)
                }

            </main>

            <aside>
                <h2>Subtotal: ${subTotal}</h2>
                <h2>Shipping: ${shipping}</h2>
                <h2>Tax: ${tax}</h2>
                <h2>Total: ${total}</h2>
            </aside>

        </div>
    )
}

export default Cart;
