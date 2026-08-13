import React from "react";
import { useState } from "react";
import { Slice1 } from "./Slice1";
import {Increment , Decrement , Reset , Addcount} from "./Slice1"
import { useDispatch } from "react-redux";



export default function Input(){
    const [number , Setnumber] = useState("")
    const dispatch = useDispatch();

    console.log(Slice1.actions.Addcount())

    function handleclick(){
    
        dispatch(Addcount(Number(number)))
        Setnumber("")
    }

    return(

        <>
        <input type="number" placeholder="Give me the number" value={number} onChange={(e)=>Setnumber(e.target.value)}></input>
        <button onClick={handleclick}>Add</button>
        </>
    )
}