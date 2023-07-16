import { useState } from "react";
import './Form.css'


export default function Form() {
    const [data, setData] = useState({ name: '', email: '' })

    function handleClick(event) {
        event.preventDefault()
        const name = event.target.previousSibling[0].value
        const email = event.target.previousSibling[1].value
        setData({ name, email})
    }

    return (
        <>
            <div className="panel">
                <h1>My First React Form</h1>
                <form className="form-wrap">
                    <div className="input-wrap">
                        <label className="label-box">Name: </label>
                        <input type="text" className="input-box"></input>
                    </div>
                    <div className="input-wrap">
                        <label className="label-box">Email: </label>
                        <input type="email" className="input-box"></input>
                    </div>
                </form>
                <button className="submit-btn" onClick={handleClick}>Submit</button>
            </div>
            <div className="show-box">
                <p>{data.name}</p>
                <p>{data.email}</p>
            </div>
        </>
    );
}