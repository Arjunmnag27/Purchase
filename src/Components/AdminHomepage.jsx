import React from 'react'
import '../Design/AdminHomepage.css'
import AdminNavbar from './AdminNavbar';
import Adminlastbar from './Adminlastbar';
import AdminSidebar from './AdminSidebar';
import { Route, Routes } from 'react-router-dom';
import Admindashboard from './Admindashboard';

export default function AdminHomepage() {
  return (
    <div>
      <AdminNavbar />
      <hr id='ahphr' />
      <div id='ahpd1'>
        <AdminSidebar />
      <Admindashboard/>
      </div>
      <Adminlastbar />
      
    </div>
  )
}
