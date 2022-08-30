import React, { useState } from 'react'


const Home = () => {
    const [name, setName] = useState("Anik Ronjon")
    const [address, setAddress] = useState("Sherpur")

    const changeName = () =>{
        setName("Anik Barmon")
    }

    const changeAddress = () => {
        setAddress("Dhaka")
    }
    return(
        <>
            <h2>Home Component</h2>
            <h4>name: {name}
            <button onClick={changeName}>Click Me</button>
            </h4>
            <h4>address: {address}
            <button onClick={changeAddress}>Click Me</button>
            </h4>
        </>
    )
}

export default Home;