import React from 'react'
import '../Design/Admindashboard.css'
import { Route, Routes } from 'react-router-dom'
import Updateprofile from './Updateprofile'
import Addproducts from './Addproducts'
import Wears from './Wears'
import Viewproducts from './Viewproducts'
import Updateproducts from './Updateproducts'


export default function Admindashboard() {
  return (
    <div id='adb1'>
      {/* <h1 id='adh1'>Never Get OLD</h1> */}
        <Routes>
            <Route path='/Updateprofile' element={<Updateprofile/>}/>
            <Route path='/Addproducts' element={<Addproducts/>}/>
            <Route path='/Wears' element={<Wears/>}/>
            <Route path='/Viewproducts' element={<Viewproducts/>}/>
            <Route path='/Updateproducts/:id' element={<Updateproducts/>}/>
        </Routes>
    </div>
  )
}
