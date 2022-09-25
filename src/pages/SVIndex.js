import React from "react"
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'
import { NavLink } from "react-router-dom"


const SVIndex = ({npcs, readNpc}) => {
  return (

    <main className="npcs-index-cards">
      {npcs?.map((npcs, index) => {
        return (
          <Card
            color="dark"
            outline
            style={{
              width: '14rem'
            }}
            key={index}
          >
            <img
              alt=""
              src={npcs.image}
            />
            <CardBody>
              <div className="npc-name"><CardTitle>{npcs.name}</CardTitle></div>
              <CardText>Likes: {npcs.likes}</CardText>
              <Button color="primary" size="lg"><NavLink to={`/svshow/${npcs.id}`}><div className="button-index-see-more">See more</div></NavLink></Button>
            </CardBody>
          </Card>

        )
      })}
    </main>
  )
}
export default SVIndex