import React from 'react';
import { Helmet } from 'react-helmet-async';

const Cart = () => {
    return (
        <div>
             <Helmet>
                <title>Cart - HomeSide hotel</title>
            </Helmet>
             <h1>Hello dear, this  Cart!</h1>
            <img src="https://image.shutterstock.com/image-vector/website-under-construction-page-flat-260nw-684804541.jpg" alt="" width={'750px'} />
        </div>
    );
};

export default Cart;