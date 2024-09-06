import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import "../Design/Wears.css"


export default function Updateproducts() {

    let [Gender, setgender] = useState("")
    let [Type, settype] = useState("")
    let [Material, setmaterial] = useState("")
    let [Size, setsize] = useState("")
    let [Quantity, setquantity] = useState("")
    let [Rate, setrate] = useState("")
    let [Rating, setrating] = useState("")
    let [Description, setdescription] = useState("")
    let [Image, setimage] = useState("")

    let param = useParams()
    let navigate=useNavigate()
    
    useEffect(() => {
        axios.get(`http://localhost:1000/Product/${param.id}`)
            .then((res) => {
                console.log(res.data);
                setgender(res.data.Gender)
                settype(res.data.Type)
                setmaterial(res.data.Material)
                setsize(res.data.Size)
                setquantity(res.data.Quantity)
                setrate(res.data.Rate)
                setrating(res.data.Rating)
                setimage(res.data.Image)
                setdescription(res.data.Description)
            })

            .catch((err) => {
                console.log(err);
                alert("No Data found")
            })
    }, [])

    let data= { Gender, Type, Material, Size, Quantity, Rate, Rating, Description, Image }

    function Updatewears(e) {
        e.preventDefault();
        axios.put(`http://localhost:1000/Product/${param.id}`, data)
            .then((res) => {
                console.log(res)
                alert("Sucessfull Product Updated")
                navigate('/AdminHomepage/Viewproducts')
            })

            .catch((err) => {
                console.log(err);
                alert("Product Not Update")
            })
    }
    return (
        <div id='w1'>
            <nav id='wn'>WEARS</nav>
            <div id='w2'>
                <form onSubmit={Updatewears} action="">
                    <div id='w3'>
                        <div id='w4'>
                            <div id='w6'>
                                <label className='wl' htmlFor="">Gender:</label>
                                <select name="" id="" required value={Gender} onChange={(e) => { setgender(e.target.value) }}>
                                    <option>-Select-</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Male Kids</option>
                                    <option>Female Kids</option>
                                </select>

                                <label className='wl' htmlFor="">Types:</label>
                                <select name="" id="" required value={Type} onChange={(e) => { settype(e.target.value) }}>
                                    <option>-Select-</option>
                                    <option>Shirt</option>
                                    <option>T-Shirt</option>
                                    <option>Pants</option>
                                    <option>Tops</option>
                                    <option>Kurta</option>
                                    <option>Panties</option>
                                </select>

                                <label className='wl' htmlFor="">Material:</label>
                                <select name="" id="" required value={Material} onChange={(e) => { setmaterial(e.target.value) }}>
                                    <option>-Select-</option>
                                    <option>Cotton</option>
                                    <option>Jeans</option>
                                    <option>Slik</option>
                                    <option>Polistare</option>
                                </select>
                            </div>
                            <div id='w7'>
                                <label className='wl' htmlFor="">Size:</label>
                                <select name="" id="" required value={Size} onChange={(e) => { setsize(e.target.value) }}>
                                    <option>-Select-</option>
                                    <option>XS</option>
                                    <option>S</option>
                                    <option>M</option>
                                    <option>L</option>
                                    <option>XL</option>
                                    <option>XXL</option>
                                    <option>XXXL</option>
                                </select>
                            </div>
                            <div id='w8'>
                                <label className='wl' htmlFor="">Quantity:</label>
                                <input className='w8i' type="number" value={Quantity} onChange={(e) => { setquantity(e.target.value) }} required />
                                <label className='wl' htmlFor="">Rate:</label>
                                <input type="number" required value={Rate} onChange={(e) => { setrate(e.target.value) }} />
                                <label className='wl' htmlFor="">Rating:</label>
                                <select name="" id="" required value={Rating} onChange={(e) => { setrating(e.target.value) }}>
                                    <option>-Select-</option>
                                    <option> 1 Star</option>
                                    <option> 2 Star</option>
                                    <option> 3 Star</option>
                                    <option> 4 Star</option>
                                    <option> 5 Star</option>
                                </select>
                            </div>
                            <div id='w9'>
                                <label className='wl' htmlFor="">Description:</label>
                                <input id='w9i' type="text" placeholder='About Product' required value={Description} onChange={(e) => { setdescription(e.target.value) }} />
                            </div>
                        </div>

                        <div id='w5'>
                            <h1 id='w5h1'>Upload Product Image</h1>
                            <input id='w5i1' type="url"  required value={Image} onChange={(e) => { setimage(e.target.value) }} />
                        </div>
                    </div>
                    <div id='w10'>
                        <button id='wb1'>Update</button>
                        <input id='wb2' type="reset" value="Clear" />
                    </div>
                </form>
            </div>
        </div>
    )
}
