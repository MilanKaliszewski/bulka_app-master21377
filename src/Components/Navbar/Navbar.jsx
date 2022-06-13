import React, {useState} from 'react';
import '../../Styles/Navbar/Navbar.css'
import {BiFoodMenu} from 'react-icons/bi'
import {Route, Router, Routes, Link} from "react-router-dom";
import Order from "../Order/Order";
import Browse from "../Browse/Browse";
import Routers from "../Routers/Routers";
function Navbar(props) {


    return (
        <div className="navbar">
            <div className="navbar__left-side">
                <BiFoodMenu className={"navbar__left-side__icon"}/>
                <div className="navbar__left-side__content">
                    <h1 className="navbar__left-side__content__header">
                        Zawsze chciałeś mieć własną bułkę?
                    </h1>


                    <Link to="/order" className="navbar__left-side__content__para">
                        Od teraz nic prostszego. <span className="navbar__left-side__content__link">Skonfiguruj sobie, dowoli!</span>
                    </Link>

                    <Link to="/browse">
                        Masz już ulubioną bułkę? <span className="navbar__left-side__content__link"> Przejdź do listy >> </span>
                    </Link>



                </div>

            </div>
            <Routers />

        </div>
    );
}

export default Navbar;