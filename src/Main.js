import React, { useEffect, useState } from "react";
import axios from "axios";

function Main() {
    const [{ name, phone }, setForm] = useState({ name: "BENKI", phone: "7026036446" })
    const [user, setUser] = useState([])

    function buttonClick() {
        getUser().then((res) => {
            setUser(res.data.users)
        })
    }
    async function getUser() {
        const users = await axios({
            method: "GET",
            url: "https://dummyjson.com/users"
        });
        console.log("users", users);
        return users
    }

    useEffect(
        () => {
            console.log("Inside use effect called");
        },
        []
    )
    useEffect(
        () => {
            console.log("Phone number changed");
        },
        [phone]
    )
    useEffect(
        () => {
            console.log("name changed");
        },
        [name]
    )
    useEffect(
        () => {
            console.log("form changed");
        },
        [name, phone]
    )

    return <>
        <h1>
            {name} - {phone}
        </h1>
        <br />
        <input value={name || ""} onChange={(e) => setForm(
            (prevValue) => {
                return { ...prevValue, name: e.target.value }
            }
        )} />
        <br />
        <input value={phone || ""} onChange={(e) => setForm(
            prevValue => {
                return { ...prevValue, phone: e.target.value }
            }
        )} />

        <br />
        <br />
        <button onClick={buttonClick}>Click</button>
        <br />
        <br />
        {user.map((e) => <>{e.email}<br /></>)}
    </>
}
export default Main;