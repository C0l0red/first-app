import React, { useState } from 'react'
import { Button, Form, Grid, Input, Segment } from 'semantic-ui-react'

export default function AddTodo({addItem}) {
    const [item, setItem] = useState();
    function handleSubmit(event){
        addItem(item)
        setItem('')
    }
    return (
        <>
            <Grid.Column width='10'>
                <Form.Input 
                    value={item} icon={{name:'plus'}} iconPosition='left' size='large' fluid
                    onChange={(e) => setItem(e.target.value)} placeholder='New Item' />
            </Grid.Column>
            <Grid.Column width='4'>
                <Form.Button  
                    content='Add' fluid
                    size='large'
                    onClick={handleSubmit} 
                    disabled={item ? false : true} 
                    color='blue' />
            </Grid.Column>
        </>
    )
}
