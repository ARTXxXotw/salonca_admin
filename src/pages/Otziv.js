import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Otziv() {
    const [data,setData]=useState([]);
    const [dataiD,setDataiD]=useState([]);

    useEffect(()=>{
        axios.get("https://fre.abbas.uz/api/contact/").then(res=>{
            setData(res.data)
        })
    })

    function komentDeleteId(id){
        setDataiD(id)
        document.querySelector(".bu-filyala-assdde").style=`display:flex`
    }
    function deletemalumot(){
        axios.delete(`https://fre.abbas.uz/api/contact/${dataiD}`).then(res=>{
            alert("Вы удалили этот koment")
            window.location.reload()
          })
    }
  return (
    <div>
        
        <table id="customers">
  <tr>
    <th>id</th>
    <th>nomer</th>
    <th>имя</th>
    <th>creator</th>
    <th>mutahasis_id</th>
    <th>delete</th>
  </tr>
  {data.map((item)=>{
    return(
        <>
        <tr>
            <td>{item.id}</td>
            <td>{item.nomer}</td>
            <td>{item.ism}</td>
            <td>{item.creator}</td>
            <td>{item.mutahasis_id}</td>
            <td><button onClick={()=>komentDeleteId(item.id)}>delete</button></td>
        </tr>
        </>
    )
  })}
</table>


<div className="bu-filyala-assdde">
<div className="modal-delete">
    <div className="modal-ichi">
      <p>Вы действительно хотите удалить этот</p>
      <div className="btn-modal">
      <button onClick={()=>deletemalumot()}>ДА</button>
      <button onClick={()=>document.querySelector(".bu-filyala-assdde").style=`display:none`}>Нет</button>
      
      </div>
    </div>
</div>
</div>



    </div>
  )
}
