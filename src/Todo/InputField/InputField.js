import React from 'react';
import  './InputField.css';

class InputField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return ( 
            <header className = "todo__top" >
                <input type="checkbox" 
                    name="choose-all" 
                    title="Выбрать всё"
                    className="uk-checkbox todo__all"
                    onChange={this.props.onCheck}
                    checked={this.props.isAllChecked}/>
                <input type="text" 
                    placeholder="Что нужно сделать?"
                    className="todo__field"
                    onKeyDown={this.props.onKeyDown}/>

                <button className="uk-button uk-button-link todo__remove-all"
                        onClick={this.props.onRemoveAll}
                        data-index="-1">
                        Удалить всё</button>
            </header>
        )
    };
}

export default InputField;