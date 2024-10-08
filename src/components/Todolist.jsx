import React, { useState } from 'react'

const Todolist = () => {
    const[activity,setActivity]=useState("");
    const[listData,setlistData]=useState([]);
 
    function addactivity(){
        // setlistData([...listData,activity])     //work synchronuosly
        // console.log(listData )
        setlistData((listData)=> {                   //work sychronusly
            const updatedList=[...listData,activity]
            console.log(updatedList);
            setActivity('')
            return updatedList
        })
    }
    //remove single data
    function removeactivity(i){
        const updatedListData=listData.filter((ele,id)=>{
          return i!==id;
        })
        setlistData(updatedListData);
    }
    //remove all data at a time
    function removeall(){
        setlistData([]);
    }
  return (
    <>
     <div className='container'>
        <div className='header'>
            TODE LIST
        </div>
        <input type='text'  placeholder='Add activity' value={activity}
        onChange={(e)=>setActivity(e.target.value)}
        />
<button onClick={addactivity}>Add</button>
       <p className='list-heading'>Here is your list :{")"}</p>
       { listData!=[] && listData.map((data,i)=>{
        return(
            <>
            <p key={i}>
                <div className='listdata'>{data}</div>
                <div>
                <button className='btn' onClick={()=>removeactivity(i)}>remove(-)</button>
                </div>
            </p>
            </>
        )
       })}
       {listData.length>=1 && <button onClick={removeall}>Remove All</button>
        
       }
       
     </div>
    </>
  )
}

export default Todolist
