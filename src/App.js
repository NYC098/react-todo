import React from "react";
import Header from "./Header";
import Item from "./Item";
import Footer from "./Footer";
import * as filterTypes from "./filter-tyes";
import './bootstrap-4.1.3-dist/css/bootstrap.css';
import './bootstrap-4.1.3-dist/css/bootstrap.min.css';
import './bootstrap-4.1.3-dist/css/bootstrap-grid.css';


export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            filterType:filterTypes.ALL
        };//初始化默认状态

    }

    changeFilterType= (filterType) =>{
        console.log(this);
        this.setState({filterType});
    }
        render()
        {
            let todos = this.props.model.todos;
            //过滤器
            let showTodos = todos.filter((todo) => {
                switch (this.state.filterType) {
                    case filterTypes.ACTIVE://要显示未完成的
                        return !todo.completed;
                    case filterTypes.COMPLETED:
                        return todo.completed;
                    default:
                        return true;
                }
            });
            let activeTodoCount = todos.reduce((count, todo) => count + (todo.completed ? 0 : 1), 0);
            let completedTodoCount = todos.length - activeTodoCount;
            //console.log(todos);
            //console.log(activeTodoCount);
            let main = (
                <ul className="list-group">
                    {
                        todos.length > 0 ? <li className="list-group-item">
                            <input type="checkbox" checked={activeTodoCount === 0} onChange={this.props.model.toggleAll}/>
                            {activeTodoCount === 0 ? "全部取消" : "全部选中"}

                        </li> : null
                    }


                    {
                        showTodos.map((todo, index) => {
                            return <Item delete={this.props.model.delete} toggle={this.props.model.toggle} key={index} todo={todo}/>
                        })}
                </ul>
            )
            return (
                <div className="container" style={{marginTop: 20}}>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <Header changeFilterType={this.changeFilterType} addTodo={this.props.model.addTodo}/>
                                </div>
                                <div className="panel-body">
                                    {main}
                                </div>
                                <div className="panel-footer">
                                    <Footer  filterType={this.state.filterType}
                                             activeTodoCount={activeTodoCount}
                                             changeFilterType={this.changeFilterType}
                                             clearCompleted={this.props.model.clearCompleted}
                                             completedTodoCount={completedTodoCount}

                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
}