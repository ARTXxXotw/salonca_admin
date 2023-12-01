import React, { useEffect, useState } from 'react'
import '../pages/Admin.css'
import { Space, Table, Tag } from 'antd';
import url from '../Host'
import axios from 'axios';
import { Button, Modal } from 'antd';

export default function Product() {
    const [data,setData]=useState([]);
    const [editID,setEditID]=useState([])
    const [dataiD, setDataiD]=useState([])
    const [page,setPage]=useState(1)

    useEffect(()=>{
        axios.get(`https://fre.abbas.uz/api/filyal`).then(res=>{
            setData(res.data);
                  })
    })

    

 

   function modalOpen(id){
    setDataiD(id)
    document.querySelector(".bu-bir").style=`display:block`
   }

   function delet(){  
    
    axios.delete(`https://fre.abbas.uz/api/filyal/${dataiD}`).then(res=>{
      alert("Вы удалили этот товар")
      document.querySelector(".bu-bir").style=`display:none`
      window.location.reload()
    })

   }

   function edit1112(id){
    setEditID(id)
    document.querySelector(".bu-iki-2").style=`display:block`
   }

   function ozgar(){
  
    var data = new FormData;
  data.append(`image`, document.querySelector("#bir").value)
  data.append(`address`, document.querySelector("#ikki").value)
  data.append(`location`, document.querySelector("#uch").value)
  data.append(`longuage`, document.querySelector("#tor").value)
  data.append(`name`, document.querySelector("#besh").value)
  data.append(`description`, document.querySelector("#olti").value)
  data.append(`phone`, document.querySelector("#yetti").value)
  data.append(`creator`, document.querySelector("#sakiz").value)
  data.append(`min_time`, document.querySelector("#toqqiz").value)
 
  
    axios.put(`https://fre.abbas.uz/api/filyal/${editID}`,data).then(res=>{
      alert("Успешно")
      window.location.reload()
    }).catch(err=>{
      alert("error")
    })
  }




function tavarqoshish(){
document.querySelector(".bu-uch").style=`display:block`
}
function ozgarID(){
    
  var data = new FormData;
  data.append(`image`, document.querySelector("#oz").value)
  data.append(`address`, document.querySelector("#oz1").value)
  data.append(`location`, document.querySelector("#oz2").value)
  data.append(`longuage`, document.querySelector("#oz3").value)
  data.append(`name`, document.querySelector("#oz4").value)
  data.append(`description`, document.querySelector("#oz5").value)
  data.append(`phone`, document.querySelector("#oz6").value)
  data.append(`creator`, document.querySelector("#oz7").value)
  data.append(`min_time`, document.querySelector("#oz8").value)
 
  
    axios.post(`https://fre.abbas.uz/api/filyal/`,data).then(res=>{
      alert("Успешно")
      window.location.reload()
    }).catch(err=>{
      alert("error")
    })
}

function orqaga(){
  document.querySelector(".bu-uch").style='display:none'
}






const [data1,setData1] = useState([]);
const [edit1ID,setEdit1ID]=useState([])
const [data1iD,setData1iD]=useState([])
const [pageiD,setPageiD]=useState([])
const [page1iD,setPage1iD]=useState([])


const [data4,setData4]=useState([]);
const [data22,setData22]=useState([]);
const [data4iD,setData4iD]=useState([]);
const [edit4iD,setEdit4iD]=useState([]);



const [mutahasis,setMutahasis]=useState([]);
const [mutahasi,setMutahasi]=useState([]);
const [mutahasi1,setMutahasi1]=useState([]);

const [filyal,setFilyal]=useState([]);
const [filyal1,setFilyal1]=useState([]);
const [filyal2,setFilyal2]=useState([]);
const [mark,setMark]=useState([]);

const [editmetid,setEditmetodd]=useState([]);
const [editmetid1,setEditmetodd1]=useState([]);


useEffect(()=>{
    axios.get(`https://fre.abbas.uz/api/mutahasis/`).then(res=>{
      console.log(res.data)  
      axios.get(`https://fre.abbas.uz/api/category/`).then(res1=>{
        setData22(res1.data)
        console.log(res.data)
        for (let i = 0; i < res.data.length; i++) {
          for (let j = 0; j < res1.data.length; j++) {
              if (res.data[i].category==res1.data[j].id) {
                res.data[i].categoryName=res1.data[j].category
              }
          }
        }
        setData1(res.data)
      })
    })
    axios.get(`https://fre.abbas.uz/api/mutahasis_time/`).then(res=>{
      console.log(res.data)
      setData4(res.data)
  })

axios.get(`https://fre.abbas.uz/api/filyal_image/`).then(res=>{
  setFilyal(res.data)
})




},[])


function ozgartir(id){
    setEdit1ID(id)
    document.querySelector(".bu-uch-la").style='display:block'
}

function ozgardimi(){
    var data = new FormData;
    data.append(`category`, document.querySelector("#category1").value)
    data.append(`tavsif`, document.querySelector("#op2").value)
    data.append(`description`, document.querySelector("#op3").value)
    data.append(`filial_id`, pageiD)
    data.append(`price`, document.querySelector("#op5").value)

       axios.put(`https://fre.abbas.uz/api/mutahasis/${edit1ID}`,data).then(res=>{
      alert("Успешно")
      window.location.reload()
    }).catch(err=>{
      alert("error")
    })
}

function omina(){
document.querySelector(".bu-uch-la").style='display:none'
}
function min(id){
setData1iD(id)
document.querySelector(".bu-filyala").style='display:block'
}
function malumotoch(){
document.querySelector(".bu-filyala").style='display:none'
axios.delete(`https://fre.abbas.uz/api/mutahasis/${data1iD}`).then(res=>{
alert("Вы удалили этот товар")
window.location.reload()
}).catch(err=>{
alert("error")
})
}
function qoshush(){
document.querySelector(".bu-filyal-24").style='display:block'
}
function slm(){
document.querySelector(".bu-filyal-24").style='display:none'
}

function qoshisihss(){
var data = new FormData;
data.append(`category`,document.querySelector("#category").value)
data.append(`tavsif`, document.querySelector("#nim2").value)
data.append(`description`, document.querySelector("#nim3").value)
data.append(`filial_id`,pageiD )
data.append(`price`, document.querySelector("#nim5").value)


  axios.post(`https://fre.abbas.uz/api/mutahasis/`,data).then(res=>{
    alert("Успешно")
    window.location.reload()
  }).catch(err=>{
    alert("error")
  })
}


function boshqapage(id){

  axios.get(`https://fre.abbas.uz/api/mutahasis/`).then(res=>{
    console.log(res.data)  
    axios.get(`https://fre.abbas.uz/api/category/`).then(res1=>{
      setData22(res1.data)
      console.log(res.data)
      for (let i = 0; i < res.data.length; i++) {
        for (let j = 0; j < res1.data.length; j++) {
            if (res.data[i].category==res1.data[j].id) {
              res.data[i].categoryName=res1.data[j].category
            }
        }
      }
      const Filter=res.data.filter(item=>item.filial_id==id)
      setData1(Filter)
      console.log(Filter,"Salom");
      setPage(2)
    })
  })



  axios.get(`https://fre.abbas.uz/api/filyal_mark/`).then(res=>{
    const Filter10=res.data.filter(item=>item.filyal_id==id)
    setMark(Filter10)
    console.log(Filter10,"Salom1");
  })



  setPageiD(id)
}
function pageyana(id){
  setPage1iD(id)
  axios.get(`https://fre.abbas.uz/api/mutahasis_time/`).then(res=>{
    const Filter=res.data.filter(item=>item.mutahasis_id==id)
    setData4(Filter)
    console.log(Filter,"Salom1");
    setPage(3)
  })

  axios.get(`https://fre.abbas.uz/api/mutahasis_image/`).then(res=>{
      const Filter=res.data.filter(item=>item.mutahasis_id==id)
      setMutahasis(Filter)
    console.log(Filter,"Salom1");

})

}



function tezoch(id){
    setData4iD(id)
    document.querySelector(".bu-filyalas").style=`display:block`
}
function ovda(){
    axios.delete(`https://fre.abbas.uz/api/mutahasis_time/${data4iD}`).then(res=>{
        alert("Вы удалили этот товар")
        window.location.reload()
      }).catch(err=>{
        alert("error")
      })
}

function edit(id){
setEdit4iD(id)
document.querySelector(".bu-filyal-4").style=`display:block`
}
function ozgard(){

var data = new FormData;
data.append(`time`, document.querySelector("#fil").value)
data.append(`mutahasis_id`, document.querySelector("#fil1").value)

   axios.put(`https://fre.abbas.uz/api/mutahasis_time/${edit4iD}`,data).then(res=>{
  alert("Успешно")
  window.location.reload()
}).catch(err=>{
  alert("error")
})
}

function dabavit(){

var data = new FormData;
data.append(`time`, document.querySelector("#filp").value)
data.append(`mutahasis_id`, document.querySelector("#filp1").value)
   axios.post(`https://fre.abbas.uz/api/mutahasis_time/`,data).then(res=>{
  alert("Успешно")
  window.location.reload()
}).catch(err=>{
  alert("error")
})
}

function deletemutahasis(id){
  setMutahasi(id)
  document.querySelector(".bu-filyalas-opa").style=`display:block`
}

function  deleteda(){

  axios.delete(`https://fre.abbas.uz/api/mutahasis_image/${mutahasi}`).then(res=>{
    alert("Вы удалили этот товар")
    window.location.reload()
  }).catch(err=>{
    alert("error")
  })
    
}

function qoshishdwe(){
  var data = new FormData;
  data.append(`image`, document.querySelector("#nnn").value)
  data.append(`mutahasis_id`, document.querySelector("#nnn2").value)

     axios.post(`https://fre.abbas.uz/api/mutahasis_image/`,data).then(res=>{
    alert("Успешно")
    window.location.reload()
  }).catch(err=>{
    alert("error")
  })
}


function setMutahasi12(id){
  setMutahasi1(id)
  document.querySelector(".bu-filyal-omagad1").style=`display:block`
}

function lala(){
  var data = new FormData;
  data.append(`image`, document.querySelector("#nnn3").value)
  data.append(`mutahasis_id`, document.querySelector("#nnn4").value)

     axios.put(`https://fre.abbas.uz/api/mutahasis_image/${mutahasi1}`,data).then(res=>{
    alert("Успешно")
    window.location.reload()
  }).catch(err=>{
    alert("error")
  })
}
function lala1(){
  var data = new FormData;
  data.append(`image`, document.querySelector("#nnn5").value)
  data.append(`filyal_id`, pageiD)

     axios.post(`https://fre.abbas.uz/api/filyal_image/`,data).then(res=>{
    alert("Успешно")
    window.location.reload()
  }).catch(err=>{
    alert("error")
  })
}

function filyaldelete(id){
  setFilyal1(id)
  document.querySelector(".bu-filyala-ass").style=`display:block`
}

function malumotoch11(){
  axios.delete(`https://fre.abbas.uz/api/filyal_image/${filyal1}`).then(res=>{
    alert("Вы удалили этот товар")
    window.location.reload()
  })
}

function filyaledit(id){
  setFilyal2(id)
  document.querySelector(".bu-filyal-42").style=`display:block`
}


function ozgard11(){
  var data = new FormData;
  data.append(`image`, document.querySelector("#fila").value)
  data.append(`filyal_id`, pageiD)

     axios.put(`https://fre.abbas.uz/api/filyal_image/${filyal2}`,data).then(res=>{
    alert("Успешно")
    window.location.reload()
  }).catch(err=>{
    alert("error")
  })
}

function putmetodfilyalId(id){
  setEditmetodd(id)
  document.querySelector(".bu-iki-2asddd").style=`display:flex`
}

function editmetod(){

  var data = new FormData;
  data.append(`text`, document.querySelector("#valueinp").value)
  data.append(`creator`, document.querySelector("#valueinp2").value)
  data.append(`filyal_id`,pageiD)
  data.append(`look`,true)
  data.append(`mark`,4)
  
     axios.put(`https://fre.abbas.uz/api/filyal_mark/${editmetid}`,data).then(res=>{
    alert("Успешно")
    window.location.reload()
  }).catch(err=>{
    alert("error")
  })
  }


  function deletemetodfilyalId(id){
    setEditmetodd1(id)
    document.querySelector(".bu-filyal").style=`display:flex`
  }



  function deleteFilyal(){
    axios.delete(`https://fre.abbas.uz/api/filyal_mark/${editmetid1}`).then(res=>{
        alert("Вы удалили")
        window.location.reload()
      }).catch(err=>{
        alert("error")
      })
  }

  return (
    <div>
        {page===1?( <div> <div className="dabavti-tavar">
           <button onClick={()=>tavarqoshish()}>Добавить товар</button>
        </div>


        <table id="customers">
  <tr>
    <th>id</th>
    <th>картинки</th>
    <th>адрес</th>
    <th>location</th>
    <th>longuage</th>
    <th>Имя</th>
    <th>телефон</th>
    <th>creator</th>
    <th>удалить</th>
    <th>редактировать</th>
  </tr>
  {data.map((item)=>{
    return(
      <>
    <tr>
        <td  onClick={()=>boshqapage(item.id)}>{item.id}</td>
        <td   onClick={()=>boshqapage(item.id)} className='table-img'><img src={item.image} alt="" /></td>
        <td  onClick={()=>boshqapage(item.id)}>{item.address}</td>
        <td  onClick={()=>boshqapage(item.id)}>{item.location}</td>
        <td  onClick={()=>boshqapage(item.id)}>{item.longuage}</td>
        <td  onClick={()=>boshqapage(item.id)}>{item.name}</td>
        <td  onClick={()=>boshqapage(item.id)}>{item.phone}</td>
        <td  onClick={()=>boshqapage(item.id)}>{item.creator}</td>
        <td><button onClick={()=>modalOpen(item.id)}>удалить</button></td>
        <td><button onClick={()=>edit1112(item.id)}>редактировать</button></td>
  </tr>
      </>
    )
  })}
</table>

<div className="bu-bir">
<div className="modal-delete">
    <div className="modal-ichi">
      <p>Вы действительно хотите удалить этот товар</p>
      <div className="btn-modal">
      <button onClick={()=>delet()}>ДА</button>
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
      <span>image</span> <br />
      <input type="url" id='bir' /> <br />
      <span>address</span> <br />
      <input type="text" id='ikki' /><br />
      <span>location</span><br />
      <input type="number" id='uch' /><br />
      <span>longuage</span><br />
      <input type="number" id='tor' /><br />
      <span>name</span><br />
      <input type="text" id='besh' /><br />
      <span>desc</span><br />
      <input type="text" id='olti' /><br />
      <span>phone</span><br />
      <input type="number" id='yetti' /><br />
      <span>creator</span><br />
      <input type="number" id='sakiz' /><br />
      <span>min_time</span><br />
      <input type="text" id='toqqiz' /><br />
      <button onClick={()=>ozgar()}>edit</button>
    </div>
</div>
</div>

<div className="bu-uch">
<div className="modal-delete">
    <div className="modal-ichi-inp">
      <div className="x-dv">
        <div className="xx" onClick={()=>orqaga()}>
          X
        </div>
      </div>
      <h5>Добавить товар</h5>
      <span>Добавить картинку</span> <br />
      <input type="url" id='oz' /> <br />
      <span>Добавить адрес</span> <br />
      <input type="text" id='oz1' /><br />
      <span>location</span><br />
      <input type="number" id='oz2' /><br />
      <span>longuage</span><br />
      <input type="number" id='oz3' /><br />
      <span>Добавить название</span><br />
      <input type="text" id='oz4' /><br />
      <span>Добавить текст</span><br />
      <input type="text" id='oz5' /><br />
      <span>Добавить номер</span><br />
      <input type="number" id='oz6' /><br />
      <span>Добавить creator</span><br />
      <input type="number" id='oz7' /><br />
      <span>min_time</span><br />
      <input type="number" id='oz8' /><br />
      <button onClick={()=>ozgarID()}>добавить</button>
    </div>
</div>
</div></div> ):(page===2?(
  <div>


<div className="nazad-btn">
  <button onClick={()=>setPage(1)}>назад</button>
</div>
  <div className="bt">
            <button onClick={()=>qoshush()}>Добавить</button>
        </div>






        <p>Тип места</p>
         <table id="customers">
  <tr>
    <th>id</th>
    <th>Специализация</th>
    <th>tavsif</th>
    <th>description</th>
    <th>Цена в час</th>
    <th>удалить</th>
    <th>редактировать</th>
  </tr>
  {data1.map((item)=>{
    return(
        <>
        <tr >
            <td onClick={()=>pageyana(item.id)}>{item.id}</td>
            <td onClick={()=>pageyana(item.id)}>{item.categoryName}</td>
            <td onClick={()=>pageyana(item.id)}>{item.tavsif}</td>
            <td onClick={()=>pageyana(item.id)}>{item.description}</td>
            <td onClick={()=>pageyana(item.id)}>{item.price}</td>
            <td><button onClick={()=>min(item.id)}>удалить</button></td>
            <td><button onClick={()=>ozgartir(item.id)}>редактировать</button></td>
        </tr>
        </>
    )
  })}
</table>

<div className="all-btn">
  <button onClick={()=>document.querySelector(".bu-filyal-omagad-2").style=`display:block`}>dabavit</button>
</div>
<p>Filyal картинки </p>
<table id="customers">
  <tr>
    <th>id</th>
    <th>картинки</th>
    <th>редактировать</th>
    <th>удалить</th>
  </tr>
  {filyal.map((item)=>{
    return(
      <>
      <tr>
        <td>{item.id}</td>
        <td  className='img'><img src={item.image} alt="" /></td>
        <td><button onClick={()=>filyaledit(item.id)}>редактировать</button></td>
        <td><button onClick={()=>filyaldelete(item.id)}>удалить</button></td>
      </tr>
      
      </>
    )
  })}

    
</table>
<p> Filyal  Отзывы</p>
<table id="customers">
  <tr>
    <th>id</th>
    <th>text</th>
    <th>creator</th>
    <th>time_create</th>
    <th>редактировать</th>
    <th>удалить</th>
  </tr>
  {mark.map((item)=>{
    return(
      <>
      <tr>
        <td>{item.mark}</td>
        <td>{item.text}</td>
        <td>{item.creator}</td>
        <td>{item.time_create}</td>
        <td><button onClick={()=>putmetodfilyalId(item.id)}>редактировать</button></td>
        <td><button onClick={()=>deletemetodfilyalId(item.id)}>удалить</button></td>
     </tr>
      </>
    )
  })}
    
</table>



<div className="bu-iki-2asddd" style={{display:"none"}}>
<div className="modal-delete">
    <div className="modal-ichi-inp">
      <div className="x-dv">
        <div className="xx" onClick={()=>document.querySelector(".bu-iki-2asddd").style=`display:none`}>
          X
        </div>
      </div>
      <span>text</span> <br />
      <input type="text" id='valueinp' /> <br />
      <span>creator</span> <br />
      <input type="text" id='valueinp2' /> <br />
      <button onClick={()=>editmetod()}>edit</button>
    </div>
</div>
</div>


<div className="bu-filyal">
<div className="modal-delete">
    <div className="modal-ichi">
      <p>Вы действительно хотите удалить</p>
      <div className="btn-modal">
      <button onClick={()=>deleteFilyal()}>ДА</button>
      <button onClick={()=>document.querySelector(".bu-filyal").style=`display:none`}>Нет</button>
      </div>
    </div>
</div>
</div>




<div className="bu-filyal-42">

<div className="modal-delete">
    <div className="modal-ichi-inp">
      <div className="x-dv">
<div className="xx"  onClick={()=>document.querySelector(".bu-filyal-42").style=`display:none`}>
  X 
</div>
</div>
        <span>картинки</span><br />
        <input type="text" id='fila' /><br />
        <button onClick={()=>ozgard11()} >изменить</button>
    </div>
</div>
</div>



<div className="bu-uch-la">
<div className="modal-delete">
    <div className="modal-ichi-inp">
      <div className="x-dv">
        <div className="xx"onClick={()=>omina()} >
          X
        </div>
      </div>
      <select id='category1'><br />
  {data22.map((item)=>{
    return(
      <>
      <option value={item.id}>{item.category}</option>
      
      </>
    )
  })}
</select><br />
      <span>tavsif</span><br />
      <input type="text" id='op2' /><br />
      <span>description</span><br />
      <input type="text" id='op3' /><br />
      <span>цена</span><br />
      <input type="number" id='op5' /><br />
      <button onClick={()=>ozgardimi()}>edit</button>
    </div>
</div>
</div>

<div className="bu-filyala">
<div className="modal-delete">
    <div className="modal-ichi">
      <p>Вы действительно хотите удалить этот filyal</p>
      <div className="btn-modal">
      <button onClick={()=>malumotoch()}>ДА</button>
      <button onClick={()=>document.querySelector(".bu-filyala").style=`display:none`}>Нет</button>
      
      </div>
    </div>
</div>
</div>

<div className="bu-filyala-ass">
<div className="modal-delete">
    <div className="modal-ichi">
      <p>Вы действительно хотите удалить этот</p>
      <div className="btn-modal">
      <button onClick={()=>malumotoch11()}>ДА</button>
      <button onClick={()=>document.querySelector(".bu-filyala-ass").style=`display:none`}>Нет</button>
      
      </div>
    </div>
</div>
</div>







<div className="bu-filyal-24">

<div className="modal-delete">
    <div className="modal-ichi-inp">
      <div className="x-dv">
<div className="xx" onClick={()=>slm()} >
  X 
</div>
</div>
<span>category</span> <br />
<select id='category'><br />
  {data22.map((item)=>{
    return(
      <>
      <option value={item.id}>{item.category}</option>
      
      </>
    )
  })}
</select><br />
<span>tavsif</span> <br />
<input type="text" id='nim2' /> <br />
<span>description</span> <br />
<input type="text" id='nim3' /> <br />
<span>цена</span> <br />
<input type="number" id='nim5' /> <br />
<button onClick={()=>qoshisihss()}>qoshish</button>
    </div>
</div>
</div>

</div>

):(page===3?(<div>

<div className="naxaas-btn">
  <button onClick={()=>setPage(2)}>назад</button>
</div>


<div className="all-butnnon">
    <button onClick={()=>document.querySelector(".bu-filyal-6").style=`display:block`}>dabavit</button>
</div>
<p>время</p>
<table id="customers">
  <tr>
    <th>id</th>
    <th>время</th>
    <th>mutahasis_id</th>
    <th>удалить</th>
    <th>редактировать</th>
  </tr>
  
{data4.map((item)=>{
    return(
        <>
        <tr>
            <td>{item.id}</td>
            <td>{item.time}</td>
            <td>{item.mutahasis_id}</td>
            <td><button onClick={()=>tezoch(item.id)}>удалить</button></td>
            <td><button onClick={()=>edit(item.id)}>редактировать</button></td>
        </tr> 
        </>
    )
})}
     
</table>


<div className="all-btn" style={{display:"flex",justifyContent:"end",marginBottom:"20px"}}>
  <button onClick={()=>document.querySelector(".bu-filyal-omagad").style=`display:block`}>добавлять</button>
</div>

<table id="customers">
  <tr>
    <th>id</th>
    <th>image_url</th>
    <th>mutahasis_id</th>
    <th>удалить</th>
    <th>редактировать</th>
  </tr>

{mutahasis.map((item)=>{
  return(
    <>
      <tr>
          <td>{item.id}</td>
          <td className='img'><img src={item.image} alt="" /></td>
          <td>{item.mutahasis_id}</td>
          <td><button onClick={()=>deletemutahasis(item.id)}>удалить</button></td>
          <td><button onClick={()=>setMutahasi12(item.id)}>редактировать</button></td>
          
      </tr> 
    </>
  )
})}

  
     
</table>




<div className="bu-filyalas">
<div className="modal-delete">
    <div className="modal-ichi">
      <p>Вы действительно хотите удалить этот </p>
      <div className="btn-modal">
      <button onClick={()=>ovda()} >ДА</button>
      <button onClick={()=>document.querySelector(".bu-filyalas").style=`display:none`}>Нет</button>
      </div>
    </div>
</div>
</div>



<div className="bu-filyal-4">

<div className="modal-delete">
    <div className="modal-ichi-inp">
      <div className="x-dv">
<div className="xx"  onClick={()=>document.querySelector(".bu-filyal-4").style=`display:none`}>
  X 
</div>
</div>
        <span>время</span><br />
        <input type="time" id='fil' /><br />
        <span>mutahasis_id</span><br />
        <input type="text" id='fil1' /><br />
        <button onClick={()=>ozgard()} >изменить</button>
    </div>
</div>
</div>


<div className="bu-filyal-6">

<div className="modal-delete">
    <div className="modal-ichi-inp">
      <div className="x-dv">
<div className="xx"  onClick={()=>document.querySelector(".bu-filyal-6").style=`display:none`}>
  X 
</div>
</div>
        <span>время</span><br />
        <input type="time" id='filp' /><br />
        <span>mutahasis_id</span><br />
        <input type="text" id='filp1' /><br />
        <button onClick={()=>dabavit()} >добавлять</button>
    </div>
</div>
</div>




</div>):("")))}

        
    

<div className="bu-filyalas-opa">
<div className="modal-delete">
    <div className="modal-ichi">
      <p>Вы действительно хотите удалить этот </p>
      <div className="btn-modal">
      <button onClick={()=>deleteda()} >ДА</button>
      <button onClick={()=>document.querySelector(".bu-filyalas-opa").style=`display:none`}>Нет</button>
      </div>
    </div>
</div>
</div>


<div className="bu-filyal-omagad">

<div className="modal-delete">
    <div className="modal-ichi-inp">
      <div className="x-dv">
<div className="xx"  onClick={()=>document.querySelector(".bu-filyal-omagad").style=`display:none`}>
  X 
</div>
</div>
        <span>картинки</span><br />
        <input type="text" id='nnn' /><br />
        <span>mutahasis_id</span><br />
        <input type="text" id='nnn2' /><br />
        <button onClick={()=>qoshishdwe()} >добавлять</button>
    </div>
</div>
</div>


<div className="bu-filyal-omagad1">

<div className="modal-delete">
    <div className="modal-ichi-inp">
      <div className="x-dv">
<div className="xx"  onClick={()=>document.querySelector(".bu-filyal-omagad1").style=`display:none`}>
  X 
</div>
</div>
        <span>картинки</span><br />
        <input type="text" id='nnn3' /><br />
        <span>mutahasis_id</span><br />
        <input type="text" id='nnn4' /><br />
        <button onClick={()=>lala()} >добавлять</button>
    </div>
</div>
</div>


<div className="bu-filyal-omagad-2">

<div className="modal-delete">
    <div className="modal-ichi-inp">
      <div className="x-dv">
<div className="xx"  onClick={()=>document.querySelector(".bu-filyal-omagad-2").style=`display:none`}>
  X 
</div>
</div>
<span>картинки</span><br />
        <input type="text" id='nnn5' /><br /> 
        <button onClick={()=>lala1()} >добавлять</button>
    </div>
</div>
</div>






    </div>
  )
}
