import React from 'react'

import { Link } from 'react-router-dom'
const List=(props)=>{
    const {todos}=props
    todos.sort((a,b)=>{
        return a.id-b.id;
    })
    console.log(todos[0]);
    const showR=todos.map(p=><tr key={p.id}>
        <td>{p.userId}</td>
        <td>{p.id}</td>
        <td>{p.title}</td>
        <td>{p.completed}</td>
        
        <td><button><Link to={`/edit/${p?.id}`}>Edit Details</Link></button></td>
    </tr>)
    return(
        <div>
           <div> 
            </div>
            <table>
                <tr>
                    <th>User ID</th>
                    <th>ID</th>
                    <th>Tittle</th>
                    <th>Completed</th>
                    
                </tr>
                {showR}
                
            </table>
        </div>
    )
}
export default List