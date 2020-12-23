import React, { useEffect, useRef, useState } from 'react'
import { Button, Grid, Icon, Input, List, Ref, Segment, Transition} from 'semantic-ui-react'

function ItemName({name}){
    
    return (
        <span>
            {name}
        </span>
    )
}

function TodoItem({name, completed, useActive, changeItem}) {
    const [revealed, setRevealed] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [newName, setNewName] = useState(name)
    const [nameState, setNameState] = useState()
    const inputRef = useRef(null)
    const [active, setActive] = useActive

    function toggleEditForm(){
        if (active === name) { setActive("") }
        else { 
            setActive(name) 
            setNewName(name)
        }
        setRevealed(!revealed);
        // setActive(name)
        console.log(inputRef)
        // inputRef.current.focus()
    }

    // function handleSubmit(){
    //     changeItem(name, newName)
    // }
    useEffect(()=>{
        setNameState(name)
        // inputRef.current.focus();
        if (active !== name){
            setRevealed(false)
        }else{
            setRevealed(true)
            inputRef.current.focus();
        }
    }, [active, name]);

    return (
        <List.Item onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <Transition visible={hovered ? true : false} animation='fade left' duration={500}>
                <span>
                    <List.Content floated='right'>
                        <Icon name='edit' size='small' color='blue' link onClick={toggleEditForm} />
                    </List.Content>
                    <List.Content floated='right'>
                        <Icon 
                            name='check' size='small' color={completed ? 'green' : null} 
                            link onClick={() => changeItem(name, null, !completed)} />
                    </List.Content>
                    {/* <List.Content floated='right'>
                        <Icon 
                            name='edit' size='small' 
                            link onClick={() => changeItem(name, "Changed")} />
                    </List.Content> */}
                </span>
            </Transition>
            <List.Content >
                {/* <ItemName name={name} /> */}
                {
                        completed?
                    (
                        <del>{nameState}</del>
                    ):(
                        nameState
                    )
                }
                
            </List.Content>
            <Transition visible={revealed} animation='fade down' duration={{hide:400, show:1000}}>
                <Segment as={Grid} vertical columns={3} >
                    <Grid.Column mobile='16' computer='10'>
                        {/* <Ref innerRef={inputRef} > */}
                            <Input 
                                value={newName} onChange={(e) => setNewName(e.target.value)} 
                                placeholder='Edit' size='small' fluid ref={inputRef} 
                                onKeyPress={(e) => {
                                    if (name !== newName && newName){ 
                                        if (e.key === "Enter"){
                                            changeItem(name, newName)
                                        }
                                    }
                                }}
                            />
                        {/* </Ref> */}
                    </Grid.Column>

                    <Grid.Column mobile={8} computer={3} >
                        <Button 
                            content="Save" color='blue' disabled={newName === name || !newName ? true : false} 
                            fluid onClick={() => changeItem(name, newName)} 
                        />
                    </Grid.Column>

                    <Grid.Column mobile={8} computer={3} >
                        <Button 
                            content="Cancel" color='red' fluid onClick={() => setRevealed(false)} />
                    </Grid.Column>
                </Segment>
            </Transition>

      </List.Item>
    );
   
}

export default React.memo(TodoItem)