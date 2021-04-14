import axios from 'axios';
import React, { Component } from 'react'
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import Todos from './Todos'
import Todo from './Todo'
import Home from './Home'
import Error from './Error'

class Operation extends Component{
    constructor(){
        super();
        this.state={
            todos:[]
        }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/todos/").then(res=>{
            res.data.length=10
            
            this.setState({
                ...this.state,
                todos: res.data
            })
        })
    }
    addoredit=(item)=>{
        const items=this.state.todos.filter(items=>items.id!=item.id)
        this.setState({
            ...this.state,
            todos:[...items,item]
        })
    }
    render(){
        console.log(this.state)
        return(

            <BrowserRouter>
            <swtich>
            <Route exact path="/" component={()=><Redirect to="/home"/>}/>
                        <Route path="/home" component={Home}/>
               
                <Route path="/allList" component={()=><Todos todos={this.state.todos}/>}/>
                
                <Route path="/add" component={()=><Todo addoredit={this.addoredit} Item={
                    {
                        "userid":"",
                        "id": "",
                        "title": "",
                        "completed":""
                    }
                }/>}/>
                <Route path="/edit/:id" component={(props)=><Todo addoredit={this.addoredit} Item={this.state.todos.find(list=>list?.id==props.match.params.id)}/>}/>
                
                </swtich>
            </BrowserRouter>
        )
    }
}
export default Operation