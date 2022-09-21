import React from "react"
import { useParams } from "react-router-dom"
import { Card, CardBody, CardText, CardTitle } from 'reactstrap'



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
      </Card>
    </div>
  )
}
export default SVShow