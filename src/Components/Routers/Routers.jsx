import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Order from "../Order/Order";
import Browse from "../Browse/Browse";

function Routers() {
    return (
        <>
            <Routes>
                <Route path="/order" element={<Order />} />
                <Route path="/browse" element={<Browse />} />
            </Routes>
        </>
    );
}

export default Routers;
