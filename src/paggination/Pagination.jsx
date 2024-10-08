import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Pagination.css'

const Pagination = () => {
    const[tabledata,setTabledata]=useState();//Stores the data fetched from the API.
    const[currentPage,setCurrentpage]=useState(1); //Tracks the current page number, initialized to 1.
    const[rowsPerPage,setRowsperpage]=useState(10);
    //pagination logic 
    const indexofLastPage=currentPage * rowsPerPage;
    const indexofFirstPage=indexofLastPage - rowsPerPage;
    const currentItem=tabledata?.users?.slice(indexofFirstPage,indexofLastPage)
    const totalPages=Math.ceil(tabledata?.total/rowsPerPage);


    useEffect(()=>{
        axios.get('https://dummyjson.com/users?limit=0')
        .then((response)=>{
            console.log(response);
            setTabledata(response?.data)
        })
    },[])
    // for prev page logic
     const handlePrev=()=>{
         setCurrentpage((prev)=>Math.max(prev-1,1)) //prev-1 means  page decre by 1 and  it does'n go below 1
     }
     //for next button logic
     const handleNext =() =>{
        setCurrentpage((prev)=>Math.min(prev+1,totalPages)) //same as previous
     }
     //for every page like 1,2,3,4,5,6
     const handlepageclick=(pageNumber)=>{
        setCurrentpage(pageNumber)
     }
  return (
    <>
    <div><p>Pagination</p></div>
    <div>
    <table className='table'>
        <thead>
            <tr>
                <th>Name:</th>
                <th>Email:</th>
                <th>Gender:</th>
            </tr>
        </thead>
        <tbody>
            {currentItem?.map((value,index)=>(
                <tr key={index}>
                <td>{value.firstName}</td>
                <td>{value.email}</td>
                <td>{value.gender}</td>
                </tr>
            ))}
        </tbody>
    </table>
    </div>
    <div className='pagination'>
        <button onClick={handlePrev} disabled={currentPage===1}>Prev</button>
        {Array.from({length:totalPages},(_,index)=>(
            <button onClick={()=>handlepageclick(index+1)} className={currentPage=== index+1? 'active' :""}>{index+1}</button>
        ))}
        <button onClick={handleNext} disabled={currentPage===totalPages}>Next</button>
    

    </div>
    </>
  )
}

export default Pagination
