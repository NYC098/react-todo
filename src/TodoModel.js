
export default class TodoModel {
    constructor(){
        this.STORE_KEY ='todos';
        this.todos = localStorage.getItem(this.STORE_KEY)?JSON.parse(localStorage.getItem(this.STORE_KEY)):[];
        // 有的话转成对象，没有的话就用空数组
        //这里可以注册监听器 ，当模型数据发生变化之后，会调用监听函数
        this.listeners =[];

    }
    //增加todo
    //订阅
    subscribe(listener){ //往 this.listeners的数组里面放监听函数
        this.listeners.push(listener);
    }
    emit(){ //把 this.listeners里面的函数全部调一遍
        this.listeners.forEach(listener=>listener());
    }
    addTodo =(todo)=>{
        todo = {
            id:Date.now(),
            completed:false,...todo
        }
        let todos =this.todos;
        todos.push(todo);
        this.notify(todos);

    }
    notify(todos){
        this.todos = todos;
        localStorage.setItem(this.STORE_KEY,JSON.stringify(todos)); //localStorage only can store string
        this.emit();

    }
    toggle =(id)=>{
        let todos =this.todos;
        todos = todos.map(todo=>{
            if(todo.id === id){
                todo.completed =!todo.completed;
            }
            return todo;
        })
        this.notify(todos);

    }
    delete =(id)=>{
        let todos =this.todos;
        // let index = todos.findIndex(todo=>todo.id===id);
        for(let i=0;i< todos.length;i++){
            if(todos[i].id === id){
                todos.splice(i,1);
                break;
            }
        }
        this.notify(todos);
    }

    clearCompleted = ()=>{
        let todos = this.todos;

        todos = todos.filter(todo=>!todo.completed);
        //console.log(todos);
        this.notify(todos);

    }
    toggleAll = (evt) => {
        let todos = this.todos;    //  获取当前窗台
        let checked = evt.target.checked;

        todos.map((todo) => {
            todo.completed = checked;
            return todo
        });
        this.notify(todos);

    }

}