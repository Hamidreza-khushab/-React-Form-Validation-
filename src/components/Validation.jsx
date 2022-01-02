import React, { useState } from 'react'
import { BsFillCursorFill } from "react-icons/bs";
import swal from 'sweetalert';
import Confirmemail from './Confirmemail';
import './Validation.css';



const Validation = () => {
    const [enter, setenter] = useState(false);

    const signUp = () => {
        if (fildpasswordValue === fildCpaswordValue && isEmailvalid(fildemailValue) && ispassvalid(fildpasswordValue) && ispassvalid(fildCpaswordValue)) {
            setenter(true)
        }
        else if (fildpasswordValue !== fildCpaswordValue)
            swal('Password and confirm Password are not equal')

    }
    const [fildnameValue, setFildtnameValue] = useState("");
    const [fildemailValue, setFildtemailValue] = useState("");
    const [fildpasswordValue, setFildtpaswordValue] = useState("");
    const [fildCpaswordValue, setFildCpasswordValue] = useState("");

    const inputName = (e) => {
        setFildtnameValue(e.target.value);
    }
    const inputemail = (e) => {
        setFildtemailValue(e.target.value);
    }
    const inputpass = (e) => {
        setFildtpaswordValue(e.target.value);
    }
    const inputcpass = (e) => {
        setFildCpasswordValue(e.target.value);
    }
    const isEmailvalid = (input) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(input);
    }
    const ispassvalid = (input) => {
        const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        return re.test(input);
    }


    return (
        <>
            <main hidden={enter}>
                <p>'{'{'}'</p>
                <p>"user name":<b>{fildnameValue}</b></p>
                <p>"Email ":<b>{fildemailValue}</b></p>
                <p>"Password  ":<b>{fildpasswordValue}</b></p>
                <p>"Confirm Password ":<b>{fildCpaswordValue}</b></p>
                <p>'{'}'}'</p>
            </main>
            <div className="container" style={{ display: `${enter ? 'none' : ''}` }}>
                <h1>Sign up</h1>
                <p>Name:</p>
                <input type="text" onInput={inputName} style={{ backgroundColor: `${fildnameValue === '' ? '#c10' : fildnameValue.length < 3 ? '#c10' : 'green'}` }} />
                <p>Email:</p>
                <input type="email" onChange={inputemail} style={{ backgroundColor: `${!isEmailvalid(fildemailValue) ? '#c10' : 'green'}` }} />
                <p>Password</p>
                <input type="password" onChange={inputpass} style={{ backgroundColor: `${!ispassvalid(fildpasswordValue) ? '#c10' : 'green'}` }} />
                <p>Confirm Password</p>
                <input type="password" onChange={inputcpass} style={{ backgroundColor: `${!ispassvalid(fildCpaswordValue) ? '#c10' : 'green'}` }} />
                <br />
                <div className='btn'>
                    <button onClick={signUp} >
                        <BsFillCursorFill />
                    </button>
                </div>
                <div className='link'>Already have an account?<a href="#">login here</a></div>
            </div>
            <Confirmemail enter={enter} fildnameValue={fildnameValue} fildemailValue={fildemailValue} />
        </>
    )
}

export default Validation
