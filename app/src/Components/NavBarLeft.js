import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { setNums } from "../Store/nums";

import './CSS/NavBarLeft.css'

const NavBarLeft = () => {
    const dispatch = useDispatch();
    const [min, setMin] = useState('');
    const [max, setMax] = useState('');
    const [count, setCount] = useState('');
    const [submitted, setSubitted] = useState(false)
    const theme = useSelector(state => state.theme);

    const setRandomNumbers = (e) => {
        e.preventDefault();
        setSubitted(!submitted);
        let total = count;
        let numArr = [];

        while (total > 0) {
            const random = Math.random() * (max - min) + min
            numArr.push(Math.floor(random))
            total--
        };
        dispatch(setNums(numArr));
    };

    useEffect(()=> {
        let total = count;
        let numArr = [];

            while (total > 0) {
                const random = Math.random() * (max - min) + min;
                numArr.push(Math.floor(random));
                total--;
            };
        dispatch(setNums(numArr));
    }, [submitted]);

    const handleRandom = () => {
        const minR = Math.random() * (50 - 1) + 1;
            setMin(Math.floor(minR));
        const maxR = Math.random() * (250 - 200) + 200;
            setMax(Math.floor(maxR));
        const rangeR = Math.random() * (50 - 10) + 10;
            setCount(Math.floor(rangeR));
        setSubitted(!submitted);
    };

    return (
        <>
            <div className={`NavBarLeft-Container-${theme}`}>
                <button onClick={handleRandom}>Random Numbers</button>
                <div className="fields-container">
                    <form onSubmit={setRandomNumbers}>
                        <label>Min Number</label>
                        <input type='number' onChange={(e)=>setMin(e.target.value)} value={min} min='1' />

                        <label>Max Number</label>
                        <input type='number' onChange={(e)=>setMax(e.target.value)} value={max} min='2' />

                        <label>How Many? <br/> (10 - 50)</label>
                        <input type='number' onChange={(e)=>setCount(e.target.value)} max='50' min='10' value={count} />

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default NavBarLeft;
