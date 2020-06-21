import React from 'react';
import './TodoList.css';


class TodoList extends React.Component {
    render() {
        return ( 
            <ul className = "todo__list" >
                {this.props.todoList.map( (item, index) => {
                    return(
                        <li key={index} className={item.state ? "checked" : "" }>
                            <label className="todo__item">
                                <input type="checkbox" 
                                    name="todo-list"
                                    checked={item.state}
                                    className="uk-checkbox todo__check"
                                    onChange={this.props.onCheck}
                                    value = {index}
                                    />
                                {item.name}</label>
                            <button data-index={index}
                                    className="remove"
                                    onClick={this.props.onRemove}>
                                Удалить</button>
                        </li>
                    )
                })}
              
            </ul>
        )
    };
}

export default TodoList;