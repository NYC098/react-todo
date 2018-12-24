import React from "react";
import * as filterTypes from "./filter-tyes";
export default class Footer extends React.Component{
    render(){
        return(
                <div className="row" style={{marginTop:15}}>
                    <div className="col-md-3">
                        <button className="btn btn-primary">
                            待办事项数量<span className="badge-primary">{this.props.activeTodoCount}</span>
                        </button>
                    </div>
                    <div className="col-md-6">
                        <button style={{marginLeft:10}}
                                className={`btn ${this.props.filterType === filterTypes.ALL?'btn-sucess':'btn-default'}`}
                                onClick={()=>this.props.changeFilterType(filterTypes.ALL)}
                               >全部</button>
                        <button style={{marginLeft:10}}
                                className={`btn ${this.props.filterType === filterTypes.ALL?'btn-sucess':'btn-default'}`}
                                onClick={()=>this.props.changeFilterType(filterTypes.ACTIVE)}
                               >未完成</button>
                        <button style={{marginLeft:10}}
                                className={`btn ${this.props.filterType === filterTypes.ALL?'btn-sucess':'btn-default'}`}
                                onClick={()=>this.props.changeFilterType(filterTypes.COMPLETED)}
                                >已完成</button>
                    </div>
                    <div className="col-md-3">
                        {
                            this.props.completedTodoCount>0?
                                <button className="btn btn-danger btn-sm" onClick={this.props.clearCompleted}>删除已完成</button>
                                : null
                        }
                    </div>
                </div>

        );
    }
}