import axios from 'axios'
import React, { useEffect, useState } from 'react'
import url from '../Host'

export default function User() {
  const [user,setUser]=useState([])
  const [userId,setUserId]=useState([])

  useEffect(()=>{
    axios.get(`${url}/api/users`).then(res=>{
        setUser(res.data)
    }).catch(err=>{console.log(err)})
  },[])


  function userDeleteOpen(id){
  setUserId(id)
  document.querySelector(".bu-bir").style="display:block;"
  }

  function userDelete(){
    axios.delete(`${url}/api/users/${userId}`).then(res=>{
        alert("Вы удалили этого пользователя")
        window.location.reload()
    }).catch(err=>{
        alert("O'chirilmadi")
    })
  }

  function userPutOpen(id){

    setUserId(id)
    document.querySelector(".bu-iki-2").style="display:block"
  }



  function userPut(){
    var formdata=new FormData()
    formdata.append("phone",null)
    formdata.append("password",document.querySelector("#parol").value)
    formdata.append("username",document.querySelector("#superadmin_username").value)
    formdata.append("superadmin",false)
    formdata.append("email",document.querySelector("#email_user").value)

    axios.put(`${url}/api/users/${userId}`,formdata).then(res=>{
        alert("успешно")
        window.location.reload()
    }).catch(err=>{
        alert("error")
    })
  }



  return (
    <div>
      <p>Все пользователи</p>
    <table id="customers">
    <tr>
      <th>id</th>
      <th>имя пользователя</th>
      <th>пароль</th>
      <th>электронная почта</th>
      <th>удалить</th>
      <th >редактировать</th>
  </tr>
  {user.map((item)=>{
    return(
      <>
    <tr>
        <td>{item.id}</td>
        <td>{item.username}</td>
        <td>{item.password}</td>
        <td>{item.email}</td>
        <td><button onClick={()=>userDeleteOpen(item.id)}>удалить</button></td>
        <td><button onClick={()=>userPutOpen(item.id)}>редактировать</button></td>
  </tr>
      </>
    )
  })}
  </table>

  <div className="bu-bir">
  <div className="modal-delete">
    <div className="modal-ichi">
      <p>Вы действительно хотите удалить этого пользователя</p>
      <div className="btn-modal">
      <button onClick={()=>userDelete()}>ДА</button>
      <button onClick={()=>document.querySelector(".bu-bir").style=`display:none`}>Нет</button>
      </div>
    </div>
  </div>
  </div>
  <div className="bu-iki-2">
<div className="modal-delete">
    <div className="modal-ichi-inp">
      <div className="x-dv">
        <div className="xx" onClick={()=>document.querySelector(".bu-iki-2").style=`display:none`}>
          X
        </div>
      </div>
      <span>имя пользователя</span> <br />
      <input type="text" id='superadmin_username' /><br />
      <span>пароль</span> <br />
      <input type="text" id='parol' /><br />
      <span>электронная почта</span><br />
      <input type="text" id='email_user' /><br />
      <button onClick={()=>userPut()}>редактировать</button>
    </div>
</div>
  </div>
    </div>
  )
}
