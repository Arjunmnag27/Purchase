import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../Design/Viewproducts.css'
import { useNavigate } from "react-router-dom";

export default function Viewproducts() {
  let [data, setdata] = useState([])
  let [force, setforce]=useState([0])
  useEffect(() => {
    axios.get('http://localhost:1000/Product')
      .then((res) => {
        console.log(res.data);
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("No data found")
      })
  }, [force])

  let navigate = useNavigate()
  function Editproduct(id) {
    navigate(`/AdminHomepage/Updateproducts/${id}`)
  }

  function Delete(id) {
    axios.delete(`http://localhost:1000/Product/${id}`)
      .then((res) => {
        console.log(res);
        alert(`${id} Sucessfull Data Deleted`)
        setforce(force+1)
      })

      .catch((err) => {
        console.log(err);
        alert("No Data Deleted")
      },[])
  }


  return (
    <div id='dv1'>
      <nav id='dvn'>
        VIEW PRODUCTS DETAILS
      </nav>
      <div id='dvd1'>
        <table id='dvt'>
          <thead id='dvth'>
            <tr>
              <th>ID</th>
              <th>Gender</th>
              <th>Type</th>
              <th>Material</th>
              <th>Quantity</th>
              <th>Rate per</th>
              <th>Rating</th>
              <th>Images</th>
              <th>Descritption</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          {data.map((x) => {
            return (
              <tr id='dvtr'>
                <td>{x.id}</td>
                <td>{x.Gender}</td>
                <td>{x.Type}</td>
                <td>{x.Material}</td>
                <td>{x.Quantity}</td>
                <td>{x.Rate}</td>
                <td>{x.Rating}</td>
                <td>{x.Image}</td>
                <td>{x.Description}</td>
                <td><button id='tdb1' onClick={() => { Editproduct(x.id) }}></button></td>
                <td><button id='tdb2' onClick={() => { Delete(x.id) }}></button></td>
              </tr>
            )
          })}
        </table>
      </div>
    </div>
  )
}


// let navigate = useNavigate()
// function Dataedit(id){
//   navigate(`/AdminHomepage/Updateproducts/${id}`)
// }

// function datadelete(id,name){
//   axios.delete(`http://localhost:1000/Product/${id}`)
//     .then((res) => {
//       alert(`${name} Data deleted`)
//       setforce(force+1)
//     })
//     .catch((err) => {
//       console.log(err);
//       alert("No data found")
//     },[force])
// }