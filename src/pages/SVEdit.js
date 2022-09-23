import React, { useState } from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { useParams, useNavigate } from 'react-router-dom'

const SVEdit = ({ npcs, updateNpc }) => {
    
    const navigate = useNavigate()

    const { id } = useParams()
    let currentNpc =  npcs?.find(npc => npc.id === +id)

    const [ editNpc, setEditNpc ] = useState({
        name: "",
        address: "",
        likes: "",
        image: ""
    })
    const handleChangeNpc = (e) => {
        setEditNpc({ ...editNpc, [e.target.name]: e.target.value })
    }
    const handleSubmit = () => {
        updateNpc(editNpc, currentNpc.id)
        alert("Npc profile has been updated!")
        navigate('/svindex')
    }
   
    return (
         <div className='container'>
            <h1 style={{textAlign:"center"}}>Edit Npc</h1>
            <Form>
                <FormGroup>
                    <Label for="name">Enter npc's name</Label>
                    <Input type="text" name="name" placeholder="Enter text here" onChange={handleChangeNpc} value={editNpc.name}/>
                </FormGroup>
                <FormGroup>
                    <Label for="age">Enter npc's address</Label>
                    <Input type="text" name="address" placeholder="Enter text here" onChange={handleChangeNpc} value={editNpc.address}/>
                </FormGroup>
                <FormGroup>
                    <Label for="likes">Favorite things</Label>
                    <Input type="text" name="likes" placeholder="Enter text here" onChange={handleChangeNpc} value={editNpc.likes}/>
                </FormGroup>
                <FormGroup>
                    <Label for="image">Image URL for your npc</Label>
                    <Input type="url" name="image" placeholder="Enter URL here" onChange={handleChangeNpc} value={editNpc.image}/>
                </FormGroup>
                <Button onClick={handleSubmit} name="submit">
                Submit
                </Button>
            </Form>
        </div>
    )
}

export default SVEdit