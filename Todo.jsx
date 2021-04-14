import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Newform.css';

const Newform=(props)=>{
    
    const [item,setItem]=useState(props.Item)
    const handleClick=(e)=>{
        const {name,value}=e.target;
        setItem({
            ...item,
            [name]:value
        })
    }
    const handleSubmit=()=>{
        props.addoredit(item)
        
    }
    return(
        <div className="cotainer">
            <form>
                    <div class="mb-3">
                      <label for="id" class="form-label">User ID</label>
                      <input type="number" class="form-control"  name="userid" value={item.userid} onChange={handleClick} required/>
                      
                    </div>
                    <div class="mb-3">
                      <label for="id" class="form-label">ID</label>
                      <input type="number" class="form-control"  aria-describedby="emailHelp" name="id" value={item.id} onChange={handleClick}required/>
                      
                    </div>


                    <div class="mb-3">
                      <label for="fname" class="form-label">Title</label>
                      <input type="text" class="form-control" name="title" value={item.title} onChange={handleClick}required/>
                    </div>
                    <div class="mb-3">
                      <label for="fname" class="form-label">Completed</label>
                      <input type="text" class="form-control" name="completed" value={item.completed} onChange={handleClick}required/>
                    </div>
                    

                    <button type="button" className="btn"  onClick={handleSubmit}><Link to="/allList" className="link">Submit</Link></button>
            </form>
        </div>
    )
}
export default Newform;