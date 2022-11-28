import React from 'react'
import { toast } from 'react-hot-toast';
import ProductCard from './ProductCard';
import img1 from '../Assets/img1.jpg';
import img2 from '../Assets/img2.jpg';
import img3 from '../Assets/img3.jpg';
import { useDispatch } from 'react-redux';





const Home = () => {



    const productList = [
        {
            name: "Anastasia",
            price: 333,
            imgSrc: img1,
            id: "1"
        },

        {
            name: "Harry Farter",
            price: 600,
            imgSrc: img2,
            id: "2"
        },

        {
            name: "Photo Synthesis",
            price: 450,
            imgSrc: img3,
            id: "3"
        },
    ]

    const dispatch = useDispatch();




    const addToCartHandler = (options) => {

        dispatch({ type: "addToCart", payload: options })
        dispatch({ type: 'calculatePrice' });
        toast.success("Added to Cart")
    }

    return (
        <div className='home'>
            {
                productList.map((product) => (
                    <ProductCard
                        name={product.name}
                        price={product.price}
                        imgSrc={product.imgSrc}
                        id={product.id}
                        key={product.id}
                        handler={addToCartHandler}
                    />
                ))
            }
        </div>
    )
}

export default Home
