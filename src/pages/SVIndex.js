import React from "react"
import npcs from "../mockSV"
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'

const SVIndex = () => {
    return (
 
        <main className="npcs-index-cards">
            {npcs.map((npcs, index) => {
                return (
                    <Card
                    style={{
                      width: '14rem'
                    }}
                    key={index}
                  >
                    <img
                      alt="image of a npc from Stardew Valley"
                      src={npcs.image}
                    />
                    <CardBody>
                      <CardTitle tag="h5">{npcs.name}</CardTitle>
                      <CardText>{npcs.name} likes {npcs.likes}</CardText>
                      <Button>Button</Button>
                    </CardBody>
                  </Card>

                )
            })}
        <>
            <h1>This is Index Page</h1>
        </>
        </main>
    )
}
export default SVIndex