import React from 'react'
import { BsFillCursorFill } from "react-icons/bs";

import './Confirmemail.css'

const Confirmemail = (props) => {
    return (
        <div className='main' style={{ display: `${!props.enter ? 'none' : ''}` }}>
            <BsFillCursorFill className='icon' />
            <h1>Welcome {props.fildnameValue}</h1>
            <p>we have send an email to :</p>
            <div className='email'>{props.fildemailValue}</div>
            <p>Please confirm!</p>
        </div>
    )
}

export default Confirmemail
