import React from "react";

export default class Item extends React.Component{
    render(){
        let todo=this.props.todo;
        const {completed,content} =todo;
        return(
            <li className="list-group-item">
                <div className="row">
                    <div className="col-md-1">
                        <input onChange={()=>{this.props.toggle(todo.id)}} type="checkbox" checked={completed}/>
                    </div>
                    <div className="col-md-10" style={{textDecoration:completed?'line-through':''}}>
                        {content}
                    </div>
                    <div className="col-md-1">
                        <button onClick={()=>{this.props.delete(todo.id)}} className="btn-danger btn-xs">X</button>
                    </div>
                </div>
            </li>
        )
    }
}