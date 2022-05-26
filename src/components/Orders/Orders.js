import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Orders.css'

const Orders = () => {
    return (
        <div>
             <Helmet>
                <title>Orders - HomeSide hotel</title>
            </Helmet>
            <h1>Hello dear, this  Order!</h1>
            <img src="https://cdn.dribbble.com/users/1812146/screenshots/6968859/media/4dbc28dbc8ba5743377283381fd83286.png" alt="" width={'750px'} />
        </div>
    );
}; 

export default Orders;