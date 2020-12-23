import React, { Component } from 'react'
import { List } from 'semantic-ui-react'
import TodoItem from './TodoItem'

export default class TodoList extends Component{
 
    constructor(props) {
        super(props)
    
        this.state = {
            activeItem: ""
        }
        // const changeItem = this.props.changeItem;
    }

    setActiveItem = (item) => {
        this.setState({
            activeItem: item
        })
    }
    
    render() {
        // console.log(changeItem)

        return (
            <List divided relaxed='very' size='massive' >
                {this.props.todo.map((item, index) => {
                    let name = item.name;
                    let completed = item.completed;
                    return(
                        <TodoItem 
                            name={name} 
                            completed={completed} 
                            changeItem={this.props.changeItem}
                            key={name} 
                            useActive={
                                [
                                this.state.activeItem, 
                                this.setActiveItem
                                ]
                            }
                        />
                    )
                })}
            </List>
            
        )
    }

}
