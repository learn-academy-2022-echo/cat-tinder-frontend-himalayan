import React from "react"
import npcs from "../mockSV"
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'
import { NavLink } from "react-router-dom"


const SVIndex = () => {
    return (
 
        <main className="npcs-index-cards">
            {npcs?.map((npcs, index) => {
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
                      <CardText>Favorite thing: {npcs.likes}</CardText>
                      <Button><NavLink to={`/svshow/${npcs.id}`} className="nav-link">See More</NavLink></Button>
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