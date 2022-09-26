import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../Store/theme";

import './CSS/NavBarTop.css'

const NavBarTop = () => {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme);

    const changeTheme = (data) => {
        if (data !== theme) {
            dispatch(setTheme(data))
        }
    }

    return (
        <>
            <div className={`NavBarTop-Container-${theme}`}>

                <div className="NavBarTop-Left-Container">NAVBAR</div>

                <div className="NavBarTop-Right-Container">
                    <button className="Light-Mode-Button" onClick={()=>changeTheme('lightMode')}>Light Mode</button>
                    <button className="Dark-Mode-Button" onClick={()=>changeTheme('darkMode')}>Dark Mode</button>
                </div>

            </div>
        </>
    );
};

export default NavBarTop;
