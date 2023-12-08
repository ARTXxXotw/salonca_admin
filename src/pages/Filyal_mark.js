import React, { useEffect, useState } from 'react'
import '../pages/Admin.css'
import axios from 'axios'
import url from '../Host'

export default function Filyal_mark() {
    const [data,setData]=useState([]);
    const [dataiD,setDataiD]=useState([]);
    const [editiD,setEditiD]=useState([]);
    useEffect(()=>{
        axios.get(`${url}/api/filyal_mark`).then(res=>{
            setData(res.data)
            console.log(res.data)
        })
    })


function deletefilyal(id){
    setDataiD(id)
    document.querySelector(".bu-filyal").style=`display:block`
    
}
function deleteFilyal(){

    axios.delete(`https://fre.abbas.uz/api/filyal_mark/${dataiD}`).then(res=>{
        alert("Вы удалили этот  Отзыв")
        document.querySelector(".bu-filyal").style=`display:none`
        window.location.reload()
      }).catch(err=>{
        alert("error")
      })
}

function qoshishmalumot(){
    document.querySelector(".bu-filyal-2").style='display:block'
}

function ozgarput(){

    var data = new FormData;
    data.append(`mark`, document.querySelector("#fil").value)
    data.append(`text`, document.querySelector("#fil1").value)
    data.append(`look`,false)
    data.append(`creator`, document.querySelector("#fil3").value)
    data.append(`filyal_id`, document.querySelector("#fil4").value)
    data.append(`time_create`, document.querySelector("#fil5").value)
    data.append(`time_update`, document.querySelector("#fil6").value)

       axios.post(`https://fre.abbas.uz/api/filyal_mark/`,data).then(res=>{
      alert("Успешно")
      window.location.reload()
    }).catch(err=>{
      alert("error")
    })
}
function minakh(id){
    setEditiD(id)
    document.querySelector(".bu-oyna").style='display:block'
}

function ozgardimi(){
    var data = new FormData;
    data.append(`mark`, document.querySelector("#bu").value)
    data.append(`text`, document.querySelector("#bu2").value)
    data.append(`creator`, document.querySelector("#bu3").value)
    data.append(`filyal_id`, document.querySelector("#bu4").value)
    data.append(`look`,true)

       axios.put(`https://fre.abbas.uz/api/filyal_mark/${editiD}`,data).then(res=>{
      alert("Успешно")
      window.location.reload()
    }).catch(err=>{
      alert("error")
    })
}

function x(){
    document.querySelector(".bu-oyna").style=`display:none`
}
function abzaljini(){
  document.querySelector(".bu-filyal-2").style=`display:none`
}


  return (
    <div>

        <div className="qoshish">
            <button onClick={()=>qoshishmalumot()}>Добавить</button>
        </div>
<p>Отзывы</p>
        <table id="customers">
  <tr>
    <th>id</th>
    <th>mark</th>
    <th>текст</th>
    <th>creator</th>
    <th>filyal_id</th>
    <th>time_create</th>
    <th>time_update</th>
    <th>удалить</th>
    <th>редактировать</th>
  </tr>
  {data.map((item)=>{
    return(
        <>
        <tr>
            <td>{item.id}</td>
            <td>{item.mark}</td>
            <td>{item.text}</td>
            <td>{item.creator}</td>
            <td>{item.filyal_id}</td>
            <td>{item.time_create.slice(0,10)}</td>
            <td>{item.time_update.slice(0,10)}</td>
            <td><button onClick={()=>deletefilyal(item.id)}>удалить</button></td>
            <td><button onClick={()=>minakh(item.id)}>редактировать</button></td>
        </tr> 
        </>
    )
  })}
     
</table>

<div className="bu-filyal">
<div className="modal-delete">
    <div className="modal-ichi">
      <p>Вы действительно хотите удалить </p>
      <div className="btn-modal">
      <button onClick={()=>deleteFilyal()}>ДА</button>
      <button onClick={()=>document.querySelector(".bu-filyal").style=`display:none`}>Нет</button>
      </div>
    </div>
</div>
</div>

<div className="bu-filyal-2">

<div className="modal-delete">
    <div className="modal-ichi-inp">
      <div className="x-dv">
<div className="xx" onClick={()=>abzaljini()}>
  X 
</div>
</div>
        <span>mark</span><br />
        <input type="text" id='fil' /><br />
        <span>текст</span><br />
        <input type="text" id='fil1' /><br />
        <span>creator</span> <br />
        <input type="text" id='fil3' /> <br />
        <span>filyal_id</span> <br />
        <input type="number" id='fil4' /> <br />
        <button onClick={()=>ozgarput()}>добавить</button>
    </div>
</div>
</div>


<div className="bu-oyna">
<div className="modal-delete">
    <div className="modal-ichi-inp">
        <div className="asas">
<div className="xx" onClick={()=>x()}>
X

</div>
        </div>
        <span>mark</span><br />
        <input type="text" id='bu' /><br />
        <span>текст</span><br />
        <input type="text" id='bu2' /><br />
        <span>creator</span> <br />
        <input type="text" id='bu3' /> <br />
        <span>filyal_id</span> <br />
        <input type="number" id='bu4' /> <br />
     
        <button onClick={()=>ozgardimi()}>редактировать</button>
    </div>
</div>
</div>

    </div>
  )

}

