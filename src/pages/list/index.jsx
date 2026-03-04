import { useEffect, useState } from 'react'
import AdminNavbar from '../../components/admin-navbar'
import SideBar from '../../components/side-bar'
import './styles.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const List = () => {

  const url = "http://localhost:4000"
  const [list,serList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    console.log(response.data);
    
    if (response.data.success) {
      serList(response.data.data)
    }
    else
      {
        toast.error("Error")
      }
  }
   const removeFood = async(foodId) => {
    const response = await axios.post(`${url}/api/food/remove`,{id:foodId});
    await fetchList();
    if (response.data.success){
      toast.success(response.data.message)
    }
    else{
      toast.error("Error")
    }
      
  }
 
   useEffect(()=>{
     fetchList();
   },[])

  return (
    <div>
      <AdminNavbar />
      <hr />
      <div className='lists'>
      <SideBar />
      <div className='list add flex-col'>
        <p>All Food List</p>
        <div className='list-table'>
          <div className='list-table-format title'>
             <b>Images</b>
             <b>Name</b>
             <b>Category</b>
             <b>Price</b>
             <b>Action</b>
          </div>
          {list.map((item,index)=>{
            return (
              <div key={index} className='list-tale-format'>
                <img src={`${url}/images/`+item.image} alt="image" />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>${item.price}</p>
                <p onClick={()=>removeFood(item._id)} className='cursor'>X</p>
              </div>
            )
          })}
        </div>
      </div>
      </div>
    </div>
  )
}

export default List;