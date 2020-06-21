import React from 'react';
import './Todo.css';

import InputField from './InputField/InputField';
import TodoList from './TodoList/TodoList';
import Nav from './Nav/Nav';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        const list = localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')) : [];
        this.state = {
            todoList:list,
            recentList: [],
            filteredList: [],
            isAllChecked : false,  
            todoState : "",
            activeLink : "all"
        }
    }
    componentDidMount(){
        this.setState({
            recentList : this.state.todoList.slice(),
            filteredList: this.state.todoList.slice(),
            todoState : this.getListState(this.state.todoList)});
        
    }

    handleKeyDown = (e) => {
        if(e.key === 'Enter' && e.target.value !== ""){
            let newItem = {
                "name" : e.target.value,
                "state" : false
            },
            newList = this.state.todoList.slice();
            newList.push(newItem);
            this.setState({
                todoList : newList,
                recentList : newList.slice(),
                isAllChecked: false,
                todoState : this.getListState(newList)
            }, () => {
                this.filtrateList(null);
                localStorage.setItem('todoList', JSON.stringify(this.state.todoList));
            });
            e.target.value = "";
        }
    }

    handleCheck = (e) => {
        let checkboxName = e.target.name
        if(checkboxName === "choose-all"){
            if(!this.state.isAllChecked) {                
                let newList = this.state.todoList.map(item => {
                    let newItem =  Object.create(item);
                    newItem.state = true;
                    return newItem
                })
                this.setState({
                    todoList : newList,
                    todoState: this.getListState(newList),
                    isAllChecked: true
                }, () => {
                localStorage.setItem('todoList', JSON.stringify(this.state.todoList));
                    this.filtrateList(null);
                });
            }
            else{
                this.setState({
                    todoList : this.state.recentList,
                    todoState: this.getListState(this.state.recentList),
                    isAllChecked: false
                }, () => {
                localStorage.setItem('todoList', JSON.stringify(this.state.todoList));
                    this.filtrateList(null);
                });
            }
        }
        else if(checkboxName === "todo-list"){
            let index = e.target.value,
                newList = this.state.todoList;
            newList[index].state = !newList[index].state;
            this.setState({
                todoList : newList,
                recentList : newList.slice(),
                todoState : this.getListState(newList),
                isAllChecked: false
            },  () => {
                localStorage.setItem('todoList', JSON.stringify(this.state.todoList));
                this.filtrateList(null);
            });

        }
    }

    getListState = (list) => {
        let total = list.length,
            ready = list.filter(curr => curr.state).length;
        return `${ready} / ${total}`;
    }

    filtrateList = (e) => {
        let type = e ? e.target.dataset.filter : this.state.activeLink;
        let newList = this.state.todoList.filter(filterByType)
        this.setState({
            filteredList: newList,
            activeLink: type
        })

        function filterByType (item){
            if(type === "all" ){
                return true;
            } else if (type === "not-ready" && !item.state){
                return true;
            } else if(type === "ready" && item.state){
                return true;
            }
            else 
                return false;
        }
        
    }

    handleRemove = (e) => {
        let index = e.target.dataset.index;
        let newList = []
        if(index > 0) {
            newList = this.state.todoList.slice();
            newList.splice(index, 1);
        }
        this.setState({
                todoList : newList,
            recentList : newList.slice(),
            isAllChecked: false,
            todoState : this.getListState(newList)
        }, () => {
            localStorage.setItem('todoList', JSON.stringify(this.state.todoList));
            this.filtrateList(null);
        }) 
    }

    render() {
        const navList = {
            "Все" : "all",
            "Не готово" : "not-ready",
            "Готово" : "ready",
        }
        return ( 
            <div className = "todo" >
                <InputField isAllChecked={this.state.isAllChecked}
                            onKeyDown={this.handleKeyDown}
                            onCheck={this.handleCheck}
                            onRemoveAll={this.handleRemove}/>

                    <TodoList todoList={this.state.filteredList}
                                onCheck={this.handleCheck}
                                onRemove={this.handleRemove}/>

                    <footer className="todo__bottom">
                        <span  className="todo__state">Готовность: {this.state.todoState}</span>
                        <Nav navList={navList} 
                            activeLink={this.state.activeLink}
                            goTo={this.filtrateList}/>
                    </footer>
            </div>
        )
    };
}

export default Todo;