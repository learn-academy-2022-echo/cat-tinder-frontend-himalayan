import React from "react"
import { Card, CardBody, CardText, CardTitle, Button } from 'reactstrap'
import { useParams, NavLink } from "react-router-dom"



const SVShow = ({ npcs }) => {
  const { id } = useParams()
  const npcObj = npcs?.find(npc => npc.id === +id)
  return (
    <div id="show-profile">
      <Card
        className="card"
        color="dark"
        outline
        style={{
          width: '14rem'
        }}
      >

        <img
          alt=""
          src={npcObj.image}
        />
        <CardBody>
          <CardTitle className="npc-name">
            {npcObj.name}
          </CardTitle>
          <CardText>
            Lives at: {npcObj.address}
          </CardText>
          <CardText>
            Likes: {npcObj.likes}
          </CardText>
        </CardBody>

        <Button color="primary" size="lg"><NavLink to={`/svedit/${npcObj.id}`} className="nav-link"><div className="button-index-see-more">Edit</div></NavLink></Button>

        

      </Card>
    </div>
  )
}
export default SVShow