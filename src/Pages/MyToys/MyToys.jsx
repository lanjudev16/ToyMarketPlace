import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MySingleToys from './MySingleToys';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
const MyToys = () => {
  useEffect(()=>{
    document.title="My toys | Disney dolls"
},[])
    const[myToys,setToys]=useState([])
    const {user}=useContext(AuthContext)
    const url=`https://project-theta-cyan.vercel.app/myToys?email=${user.email}`
    useEffect(()=>{
      fetch(url).then(res=>res.json()).then(data=>{
        setToys(data)
      })
    },[user,url])
    const handleDelete=(id)=>{
      
        fetch(`https://project-theta-cyan.vercel.app/delete/${id}`,{
            method:"DELETE"
        }).then(res=>res.json()).then(data=>{
          alert('Are you sure to delete this toy?')
            if(data.deletedCount){
              const toys=myToys.filter(item=>item._id!=id)
              setToys(toys)
              
            }
        })
    }

    return (
        <div className="overflow-x-auto mb-5 card border-[2px] border-red-300 p-5 my-5 shadow">
        <table className="table table-compact w-full">
          <Toaster></Toaster>
          <thead>
            <tr>
              <th>No.</th>
              <th>Toy Name</th>
              <th>Seller Name</th>
              <th>Price</th>
              <th>Sub Category</th>
              <th>Quantity</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          {myToys &&
            myToys.map((item, index) => (
              <MySingleToys key={item._id} index={index} toyInfo={item} handleDelete={handleDelete} >

              </MySingleToys>
            ))}
        </table>
      </div>
    );
};

export default MyToys;