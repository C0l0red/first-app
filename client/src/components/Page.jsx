import React, {useEffect, useState} from 'react'
import { Grid, Header, Segment } from 'semantic-ui-react'
import AddTodo from './AddTodo'
import Aside from './Aside'
import TodoList from './TodoList'

export default function Page() {
    const [todo, setTodo] = useState({
        "movies to see": [
            {name: "Black Panther II", completed: true},
            {name: "Doctor Strange 2", completed: false},
            {name: "Thor 4", completed: false},
            {name: "Fantastic Four", completed: false},
            {name: "Wonderwoman 1984", completed: false},            
        ],
        series: [
            {name: "Loki", completed: false},
            {name: "Wanda Vision", completed: false},
            {name: "What if...?", completed: false},
            {name: "Falcon and The Winter Soldier", completed: false},
            {name: "She Hulk", completed: false},            
        ],
        books: [
            {name: "The Queen's Gambit", completed: false},
            {name: "Allegiant", completed: false},
            {name: "Happyness", completed: false},
            {name: "Sherlock Holmes", completed: false},
            {name: "A Wrinkle in Time", completed: false},            
        ],
        cartoons: [
            {name: "Frozen", completed: false},
            {name: "Shrek", completed: false},
            {name: "Toy Story", completed: false},
            {name: "Ice Age", completed: false},
            {name: "Kung Fu Panda", completed: false},            
        ]
    })
    let [current, setCurrent] =  useState("movies to see")
    
    function addTodoItem(item){
        let currentList = [...todo[current]]
        let newItem = {name: item, completed: false}
        currentList.push(newItem)
        setTodo({...todo, [current]: currentList})
        
    }

    function changeItem(name, newName, completed){
        console.log(name, newName, completed)
        let currentList = [...todo[current]]
        // let item = currentList.filter((item) => item.name === name);

        currentList.forEach((item) => {
            if (item.name === name){
                if (completed !== undefined){
                    item.completed = completed;

                }
                else if(newName){
                    item.name = newName;
                }
            }
        })
        setTodo({...todo, [current]: currentList})
        // if (checked){
            
        // }
    }

    useEffect(()=> {
        // console.log(todo)
    }, [todo])

    

    return (
        <Segment vertical>
            <Grid container stackable textAlign='center'>
                <Header as='h1' content="Todo App" size='huge' style={{fontSize: '4em'}} />
                <Grid.Row>
                    <AddTodo addItem={addTodoItem} />
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width='12'>
                        <Segment vertical padded >
                            <Header as='h1' content={current.toUpperCase()} />
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width='10' textAlign='left'>
                        <TodoList todo={todo[current]} changeItem={changeItem} />
                    </Grid.Column>
                    <Grid.Column width='5' floated='right'>
                        <Aside categories={Object.keys(todo)} useCurrent={[current, setCurrent]} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            {/* <TodoList todo={todo} /> */}
        </Segment>
    )
}
