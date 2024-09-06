import React from 'react'
import "../Design/Homepage.css"
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/esm/Button';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import { Dropdown } from 'bootstrap';

export default function Homepage() {
    return (
        <div>
            <nav className='dd1'>
                <div id='div1'>
                    <div id='div1a'>
                        <img id='div1ai' src="images/logo.png" alt="" />
                        <h3 id='div1h1'>Purchase</h3>
                    </div>

                    <div id='div1b'>
                        <img id='div1bi' src="images/search.png" alt="" />
                        <input type="text" placeholder='Try Saree, Kruti or Search by Product Code' />
                    </div>
                </div>
                <div id='div2'>

                    <div id='div2a'>
                        <div id='div2a1'>
                            <img id='div2a1i' src="images/mobile.png" alt="" />
                            <span id='div2a1s'>Download App</span>
                        </div>
                        <div id='div2a2'>
                            <span id='div2a2s' >Become a supplier</span>
                        </div>
                        <div id='div2a3'>
                            <img id='div2a3i' src="images/mic.png" alt="" />
                            <span id='div2a3s'>Newsroom</span>
                        </div>
                    </div>

                    <div id='div2b'>
                        <div id='div2b1'>
                            <img id='div2b1i' src="images/profile456.png" alt="" />
                            <div id='div2b1d'>
                                <Link id='div2b1dl' to='/Profilepage'><span className='div2bs1'>Sign Up</span></Link>
                                <span className='div2bs1'>My Orders</span>
                                <span className='div2bs1'>Delete Account</span>
                            </div>
                        </div>

                        <div id='div2b2'>
                            <img id='div2b2i' src="images/cart1.png" alt="" />
                            <span id='div2b2s'>Cart</span>
                        </div>
                    </div>
                </div>
            </nav>
            <div id='hd5'>
                <h1 className='hd5h1'>Men
                    <div className='hd5d1'>
                        <div>
                            <h1 className='hd5d1h'>Top Wear</h1>
                            <h5 className='hd5d1h5'>T-Shirts</h5>
                            <h5 className='hd5d1h5'>Shirts</h5>
                        </div>
                        <div>
                            <h1 className='hd5d1h'>Bottom Wear</h1>
                            <h5 className='hd5d1h5'>Track Pants</h5>
                            <h5 className='hd5d1h5'>Jeans</h5>
                            <h5 className='hd5d1h5'>Trousers</h5>
                        </div>
                        <div>
                            <h1 className='hd5d1h'>Men Accessories</h1>
                            <h5 className='hd5d1h5'>Watches</h5>
                            <h5 className='hd5d1h5'>Belts</h5>
                            <h5 className='hd5d1h5'>Wallets</h5>
                            <h5 className='hd5d1h5'>Jewellery</h5>
                            <h5 className='hd5d1h5'>Sunglasses</h5>
                            <h5 className='hd5d1h5'>Bags</h5>
                        </div>
                        <div>
                            <h1 className='hd5d1h'>Men Footwear</h1>
                            <h5 className='hd5d1h5'>Casual Shoes</h5>
                            <h5 className='hd5d1h5'>Sports Shoes</h5>
                            <h5 className='hd5d1h5'>Sandals</h5>
                            <h5 className='hd5d1h5'>Formal Shoes</h5>
                        </div>
                        <div>
                            <h1 className='hd5d1h'>Ethnic wear</h1>
                            <h5 className='hd5d1h5'>Men Kurtas</h5>
                            <h5 className='hd5d1h5'>Ethnic Jackets</h5>
                        </div>
                        <div>
                            <h1 className='hd5d1h'>Inner & Sleep wear</h1>
                            <h5 className='hd5d1h5'>Vests</h5>
                        </div>
                    </div>
                </h1>
                <h1 className='hd5h1'>Women
                    <div id='hd5d2'>
                        <div>
                            <h1 className='hd5d1h'>Topwear</h1>
                            <h5 className='hd5d1h5'>Tops</h5>
                            <h5 className='hd5d1h5'>Dress</h5>
                            <h5 className='hd5d1h5'>Sweaters</h5>
                            <h5 className='hd5d1h5'>Jumpsuits</h5>
                        </div>
                        <div>
                            <h1 className='hd5d1h'>BottomWear</h1>
                            <h5 className='hd5d1h5'>Jeans</h5>
                            <h5 className='hd5d1h5'>Jeggings</h5>
                            <h5 className='hd5d1h5'>Palazzos</h5>
                            <h5 className='hd5d1h5'>Skirts</h5>
                        </div>
                        <div>
                            <h1 className='hd5d1h'>Innerwear</h1>
                            <h5 className='hd5d1h5'>Bra</h5>
                            <h5 className='hd5d1h5'>Briefs</h5>
                        </div>
                        <div>
                            <h1 className='hd5d1h'>Sleepwear</h1>
                            <h5 className='hd5d1h5'>Nightsuits</h5>
                            <h5 className='hd5d1h5'>Babydolls</h5>
                        </div>
                        <div>
                            <h1 className='hd5d1h'>Sarees</h1>
                            <h5 className='hd5d1h5'>Slik Sarees</h5>
                            <h5 className='hd5d1h5'>Cotton Sarees</h5>
                            <h5 className='hd5d1h5'>Cotton Slik Sarees</h5>
                            <h5 className='hd5d1h5'>Chiffon Sarees</h5>
                            <h5 className='hd5d1h5'>Satin Sarees</h5>
                            <h5 className='hd5d1h5'>Embroidered Sarees</h5>
                        </div>
                        <div>
                            <h1 className='hd5d1h'>Other Ethnic</h1>
                            <h5 className='hd5d1h5'>Blouse</h5>
                            <h5 className='hd5d1h5'>Dupatta</h5>
                            <h5 className='hd5d1h5'>Lehanga</h5>
                            <h5 className='hd5d1h5'>Gown</h5>
                            <h5 className='hd5d1h5'>Ethnic Bottomwear</h5>
                        </div>
                    </div>
                </h1>
                <h1 className='hd5h1'>Kitchen
                    <div id='hd5d3'>
                        <div>
                            <h1 className='hd5d1h'>Home Furnishing</h1>
                            <h5 className='hd5d1h5'>Bedsheets</h5>
                            <h5 className='hd5d1h5'>Doormats</h5>
                            <h5 className='hd5d1h5'>Curtains & Sheers</h5>
                            <h5 className='hd5d1h5'>Cushions</h5>
                            <h5 className='hd5d1h5'>Cushions Covers</h5>
                            <h5 className='hd5d1h5'>Mattress protectors</h5>
                        </div>
                        <div>
                            <h1 className='hd5d1h'>Homedecor</h1>
                            <h5 className='hd5d1h5'>Strickers</h5>
                            <h5 className='hd5d1h5'>Clocks</h5>
                            <h5 className='hd5d1h5'>Showpieces</h5>
                        </div>
                        <div>
                            <h1 className='hd5d1h'>Kitchen & Dining</h1>
                            <h5 className='hd5d1h5'>Kitchen Storage</h5>
                            <h5 className='hd5d1h5'>Cookware</h5>
                            <h5 className='hd5d1h5'>Bakewear</h5>
                        </div>
                    </div>
                </h1>
                <h1 className='hd5h1'>Electronics
                    <div id='hd5d4'>
                        <div>
                            <h1 className='hd5d1h'>Mobile & Accessories</h1>
                            <h5 className='hd5d1h5'>Smartwatches</h5>
                            <h5 className='hd5d1h5'>Mobile Holders</h5>
                            <h5 className='hd5d1h5'>Mobile Case & Covers</h5>
                        </div>
                        <div>
                            <h1 className='hd5d1h'>Appliances</h1>
                            <h5 className='hd5d1h5'>Grooming</h5>
                            <h5 className='hd5d1h5'>Home Appliances</h5>
                        </div>
                    </div>
                </h1>
                <h1 className='hd5h1'>Kids</h1>
                <h1 className='hd5h1'>Jewellery & Accessories</h1>
                <h1 className='hd5h1'>Beauty & Health</h1>
                <h1 className='hd5h1'>Bags & Footwear</h1>
            </div>

            <div id='hd6'>
                <div id='hd6a'>
                    <div id='hd6ad1'>
                        <h1 className='hd6ad1p'>Lowest Prices</h1>
                        <h1 className='hd6ad1p'>Best Quality Shopping</h1>
                    </div>
                    <div id='hd6ad2'>
                        <div id='hd6add1'>
                            <img id='hd6adi' src="/images/Delivery.png" alt="" />
                            <span id='hd6ads1'> Free Delivery</span>
                        </div>
                        <div id='hd6add2'>
                            <img id='hd6adi' src="/images/cod.png" alt="" />
                            <span id='hd6ads1'> Cash on Delivery</span>
                        </div>
                        <div id='hd6add3'>
                            <img id='hd6adi' src="/images/easy.png" alt="" />
                            <span id='hd6ads1'>Easy Returns</span>
                        </div>
                    </div>
                    <div id='hd6ad3'>
                        <img id='hd6ad3i' src="/images/play.png" alt="" />
                        <button id='hd6adb1'>Download the Purchase App</button>
                    </div>
                </div>
                <div id='hd6b'>
                <img id='hd6bi1' src="images/bag.png" alt="" />
                <img id='hd6bi2' src="images/earpod.png" alt="" />
                    <h1 className='hd6ad1h'>Get up to</h1>
                    <h1 id='hd6ad1h1'>20% off*</h1>
                    <h1 className='hd6ad1h'>on first order</h1>
                </div>

            </div>

























            {/* <div id='div4'>
                <div id='div4a'>
                    <h1>Lowest Prices <br />Best Quality Shopping</h1>
                    <div>
                        <div id='div4a1'>
                            <div id='div4aa1'>
                                <img src="/images/fd.png" alt="" />
                                <h5>Free Delivery</h5>
                            </div>
                            <div id='div4ab1'>
                                <img src="/images/cod.png" alt="" />
                                <h5>Cash On Delivery</h5>
                            </div>
                            <div id='div4ac1'>
                                <img src="/images/er1.png" alt="" />
                                <h5>Easy Return</h5>
                            </div>
                        </div>
                    </div>

                    <div id='div4a2'>
                        <button>Download the Purchase App</button>
                    </div>
                </div>

                <div id='div4b'>
                    <div id='div4b1'>
                        <h3>Get Up to </h3>
                        <h1>40% off*</h1>
                        <h3>on first order</h3>
                    </div>
                    <div id='div4b2'>
                        <img src="/images/imag4.gif" alt="" />
                    </div>
                </div>
            </div> */}
            {/* <hr /> */}
            {/* <div id='div5'>

            </div> */}

        </div>
    )
}
