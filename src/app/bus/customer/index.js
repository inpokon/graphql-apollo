import React from "react";
import useCustomer from "./hooks/useCustomer";

export default function Customer() {
    const {handleChange, save, createAccount} = useCustomer();

    const customerJSX = createAccount && (
        <p>
            We already created customer: {createAccount.name}
        </p>
    )
    return (
        <>
            <h1>Registration</h1>
            <input type="text" placeholder="name" name="name" onChange={handleChange}/>
            <input type="text" placeholder="username" name="username" onChange={handleChange}/>
            <input type="password" placeholder="password" name="password" onChange={handleChange}/>
            <button type="submit" onClick={save}>Save</button>
            {customerJSX}
        </>
    )
}