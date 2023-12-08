import axios from 'axios'
import React, { useEffect, useState } from 'react'
import url from '../Host'

export default function Metro() {
    const [data,setData]=useState([])
    const [dataiD,setDataiD]=useState([])
    const [data1iD,setData1iD]=useState([])
    useEffect(()=>{
        axios.get(`${url}/api/rayon/`).then(res=>{
            setData(res.data)
        })
    },[])
    function deletemalumot(){
        axios.delete(`${url}/api/rayon/${dataiD}`).then(res=>{
          alert("Вы удалили этот rayon")
          window.location.reload()
        })
      }
      function deletemodal(id){
        setDataiD(id)
        document.querySelector(".bu-filyala-assdde").style=`display:block`
      }
      function postmetod(){
            var data = new FormData;
            data.append(`title`, document.querySelector("#nnnaa").value)
          
               axios.post(`${url}/api/rayon/`,data).then(res=>{
              alert("Успешно")
              window.location.reload()
            }).catch(err=>{
              alert("error")
            })
      }
      function qoshish(){
        document.querySelector(".bu-filyal-omagadasde").style=`display:block`
      }
      function editmalumot(id){
        setData1iD(id)
        document.querySelector('.bu-filyal-omagadasdessd').style=`display:block`
      }
      function editmetod(){
        var data = new FormData;
        data.append(`title`, document.querySelector("#nnnaa1").value)
      
           axios.put(`${url}/api/rayon/${data1iD}`,data).then(res=>{
          alert("Успешно")
          window.location.reload()
        }).catch(err=>{
          alert("error")
        })
      }

  return (
    <div>
        <div className="all-btn">
            <button onClick={()=>qoshish()}>добавить</button>
        </div>

              <table id="customers">
  <tr>
    <th>id</th>
    <th>текст</th>
    <th>удалить</th>
    <th>редактировать</th>
  </tr>
    {data.map((item)=>{
        return(
            <>
        <tr>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td><button onClick={()=>deletemodal(item.id)}>удалить</button></td>
            <td><button onClick={()=>editmalumot(item.id)}>редактировать</button></td>
        </tr>
            </>
        )
    })}
</table>

<div className="bu-filyala-assdde">
<div className="modal-delete">
    <div className="modal-ichi">
      <p>Вы действительно хотите удалить этот район</p>
      <div className="btn-modal">
      <button onClick={()=>deletemalumot()}>ДА</button>
      <button onClick={()=>document.querySelector(".bu-filyala-assdde").style=`display:none`}>Нет</button>
      
      </div>
    </div>
</div>
</div>


<div className="bu-filyal-omagadasde">

<div className="modal-delete">
    <div className="modal-ichi-inp">
      <div className="x-dv">
<div className="xx"  onClick={()=>document.querySelector(".bu-filyal-omagadasde").style=`display:none`}>
  X 
</div>
</div>
        <span>текст</span><br />
        <input type="text" id='nnnaa' /><br />
        <button onClick={()=>postmetod()} >добавить</button>
    </div>
</div>
</div>


<div className="bu-filyal-omagadasdessd">

<div className="modal-delete">
    <div className="modal-ichi-inp">
      <div className="x-dv">
<div className="xx"  onClick={()=>document.querySelector(".bu-filyal-omagadasdessd").style=`display:none`}>
  X 
</div>
</div>
        <span>текст</span><br />
        <input type="text" id='nnnaa1' /><br />
        <button onClick={()=>editmetod()} >редактировать</button>
    </div>
</div>
</div>

    </div>
  )
}
