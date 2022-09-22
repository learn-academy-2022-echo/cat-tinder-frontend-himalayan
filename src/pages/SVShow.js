import React from "react"
import { Card, CardBody, CardText, CardTitle, Button } from 'reactstrap'
import { useParams, NavLink } from "react-router-dom"



const SVShow = ({ npcs }) => {
  const { id } = useParams()
  const npcObj = npcs?.find(npc => npc.id === +id)
  return (
    <div id="show-profile">
      <Card className="my-2">
        <img
          alt="Card image cap"
          src={npcObj.image}
        />
        <CardBody>
          <CardTitle tag="h5" id="npc-name">
            { npcObj.name }
          </CardTitle>
          <CardText>
            Favorite thing: {npcObj.likes}
          </CardText>
        </CardBody>
        <Button><NavLink to={`/svedit/${npcObj.id}`} className="nav-link">Edit</NavLink></Button>
      </Card>
    </div>
  )
}
export default SVShow