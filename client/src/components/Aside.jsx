import React from 'react'
import { Segment } from 'semantic-ui-react'

export default function Aside({categories, useCurrent}) {
    const [current, setCurrent] = useCurrent
    return (
        <aside>
            <Segment.Group style={{marginTop: "15px"}}>
                {
                    categories.map((name, index) => {
                        return(
                            <Segment padded>
                                <a onClick={() => setCurrent(name)} href="#">{name} </a>
                            </Segment>
                        )
                    })
                }
            </Segment.Group>
        </aside>
    )
}
