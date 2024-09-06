import React from 'react'
import '../Design/AdminSidebar.css'
import { Link } from 'react-router-dom'

export default function AdminSidebar() {
  return (
        <div id='Ahp5a1'>
          <button className='Ahp5ab1'>Products
            <div id='Ahp5ab1d1'>
             <Link className='Ahpl' to='/AdminHomepage/Addproducts'><span className='Ahp5ab1d1s'>Add Products</span></Link>
              <Link className='Ahpl' to='/AdminHomepage/Viewproducts'><span className='Ahp5ab1d1s' >View Products</span></Link>
            </div>
          </button>
          <hr className='Ahp5ab1hr' />
          <button className='Ahp5ab1'>Accounts</button>
          <hr className='Ahp5ab1hr' />
          <button className='Ahp5ab1'>Employee</button>
          <hr className='Ahp5ab1hr' />
          <button className='Ahp5ab1'>Reports</button>
          <hr className='Ahp5ab1hr' />
          <button className='Ahp5ab1'>Stocks</button>
          <hr className='Ahp5ab1hr' />
        </div>
  )
}
