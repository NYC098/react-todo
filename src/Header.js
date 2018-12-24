import React from "react";
const ENTRY_KEY=13;
export default class Header extends React.Component{
    handleKeyDown= evt => {
        if (evt.keyCode === ENTRY_KEY && evt.target.value!==''){
            let content = evt.target.value;
            this.props.addTodo({content});
            evt.target.value="";
        }
    }

    render(){
        return(
                <div className="form-group">
                    <input type="text" onKeyDown={this.handleKeyDown} autoFocus={true} className="form-control"/>
                </div>
        )
    }
}