import React from 'react';
import {BiFoodMenu} from 'react-icons/bi'
import {FaHamburger} from 'react-icons/fa'
import {ImPlus, ImMinus} from 'react-icons/im'
import '../../Styles/Navbar/Navbar.css'
import {useState} from "react";

export default function Order(props) {
    const cheeseTypes = ["Ser żółty", "Ser topiony", "Ser maślany", "Oscypek"]
    const breadTypes = ["Jasne", "Ciemne", "Tostowe", "Ziarniste"]
    const meatTypes = ["Kotlet schabowy", "Mięso z łosia", "Kotlet mielony", "Brak"]
    const butterTypes = ["Zwierzęce", "Roślinne", "Wegetariańskie"]

    const [bread, setBread] = useState("Jasne")
    const [butterType, setButterType] = useState("Zwykłe, zwierzęce")
    const [cheese, setCheese] = useState("Ser żółty")
    const [cheeseAmount, setCheeseAmount] = useState(1)
    const [meat, setMeat] = useState("Kotlet schabowy")
    const [meatAmount, setMeatAmount] = useState(1)
    const [name, setName] = useState("")

    const saveItem = () => {
        const rollObject = {key: "Bułka", name: name,bread: bread, butterType: butterType, meat: meat, cheese: [cheese, cheeseAmount]}
        localStorage.setItem(name, JSON.stringify(rollObject))
    }


    return (
        <div className="navbar__right-side">
            <div action="#" className="navbar__right-side__form">
                <div>
                    {/*<FaHamburger className={"navbar__right-side__form__hamburger-icon"}/>*/}
                    <div className={"navbar__right-side__form__hamburger-icon"}>
                        <img src="https://cdn.pixabay.com/photo/2014/12/21/23/56/hamburger-576419_640.png" alt="bulka"/>
                    </div>

                </div>

                <div className="navbar__right-side__form__content-box">
                    <div className="navbar__right-side__form__content-name">Nazwa bułki:</div>
                    <input type="text" name="roll-name" id="roll-name" className="navbar__right-side__form__roll-name" onChange={(e) => {setName(e.target.value)}}/>
                </div>
                <div className="navbar__right-side__form__content-box">
                    <div className="navbar__right-side__form__content-name">Rodzaj Bułki</div>
                    <div  className="navbar__right-side__form__content-choice">{bread}</div>
                    <div className="navbar__right-side__form__content-box__plus-minus-sign" onClick={() => {setBread(breadTypes.indexOf(bread) + 1 < breadTypes.length ? breadTypes[breadTypes.indexOf(bread) + 1] : breadTypes[0])}}>
                        <ImPlus />
                    </div>
                    <div className="navbar__right-side__form__content-box__plus-minus-sign" onClick={() => { setBread(breadTypes.indexOf(bread) - 1 < 0 ? breadTypes[breadTypes.length - 1] : breadTypes[breadTypes.indexOf(bread) - 1])}}>
                        <ImMinus/>
                    </div>
                </div>
                <div className="navbar__right-side__form__content-box">
                    <div className="navbar__right-side__form__content-name">Rodzaj masła</div>
                    <div  className="navbar__right-side__form__content-choice">{butterType}</div>
                    <div className="navbar__right-side__form__content-box__plus-minus-sign" onClick={() => {setButterType(butterTypes.indexOf(butterType) + 1 < butterTypes.length ? butterTypes[butterTypes.indexOf(butterType) + 1] : butterTypes[0])}}>
                        <ImPlus />
                    </div>
                    <div className="navbar__right-side__form__content-box__plus-minus-sign" onClick={() => { setButterType(butterTypes.indexOf(butterType) - 1 < 0 ? butterTypes[butterTypes.length - 1] : butterTypes[butterTypes.indexOf(butterType) - 1])}}>
                        <ImMinus/>
                    </div>
                </div>
                <div className="navbar__right-side__form__content-box">
                    <div className="navbar__right-side__form__content-name">Typ mięsa</div>
                    <div  className="navbar__right-side__form__content-choice">{meat}</div>
                    <div className="navbar__right-side__form__content-box__plus-minus-sign" onClick={() => {setMeat(meatTypes.indexOf(meat) + 1 < meatTypes.length ? meatTypes[meatTypes.indexOf(meat) + 1] : meatTypes[0])}}>
                        <ImPlus />
                    </div>
                    <div className="navbar__right-side__form__content-box__plus-minus-sign" onClick={() => { setMeat(meatTypes.indexOf(meat) - 1 < 0 ? meatTypes[meatTypes.length - 1] : meatTypes[meatTypes.indexOf(meat) - 1])}}>
                        <ImMinus/>
                    </div>
                </div>
                <div className="navbar__right-side__form__content-box">
                    <p className="navbar__right-side__form__content-name">Rodzaj sera</p>
                    <p  className="navbar__right-side__form__content-choice">{cheese}</p>
                    <div className="navbar__right-side__form__content-box__plus-minus-sign" onClick={() => {setCheese(cheeseTypes.indexOf(cheese) + 1 < cheeseTypes.length ? cheeseTypes[cheeseTypes.indexOf(cheese) + 1] : cheeseTypes[0])}}>
                        <ImPlus />
                    </div>
                    <div className="navbar__right-side__form__content-box__plus-minus-sign" onClick={() => { setCheese(cheeseTypes.indexOf(cheese) - 1 < 0 ? cheeseTypes[cheeseTypes.length - 1] : cheeseTypes[cheeseTypes.indexOf(cheese) - 1])}}>
                        <ImMinus/>
                    </div>
                </div>
                <div className="navbar__right-side__form__content-box">
                    <p className="navbar__right-side__form__content-name">Plasterki sera</p>
                    <p  className="navbar__right-side__form__content-choice">{cheeseAmount}</p>
                    <div className="navbar__right-side__form__content-box__plus-minus-sign" onClick={() => {setCheeseAmount(cheeseAmount + 1 < 5 ? cheeseAmount + 1 : 4)}}>
                        <ImPlus />
                    </div>
                    <div className="navbar__right-side__form__content-box__plus-minus-sign" onClick={() => {setCheeseAmount(cheeseAmount - 1 < 0 ? 0 : cheeseAmount - 1)}}>
                        <ImMinus/>
                    </div>
                </div>
                <div className="navbar__right-side__form__content-box">
                    <button className={"navbar__right-side__form__content-box__button"}>Zamów bułkę</button>
                    <button className={"navbar__right-side__form__content-box__button"} onClick={saveItem}>Zapisz preset</button>
                </div>


            </div>
        </div>
    );
}

// export default Order;

