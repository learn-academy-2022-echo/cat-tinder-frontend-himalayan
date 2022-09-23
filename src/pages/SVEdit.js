import React, { useState } from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { useParams, useNavigate } from 'react-router-dom'


const SVEdit = ({ npcs, updateNpc }) => {

    const navigate = useNavigate()

    const { id } = useParams()
    let currentNpc = npcs?.find(npc => npc.id === +id)

    const [editNpc, setEditNpc] = useState({
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
            <div className="edit-title">
                <h1 style={{ textAlign: "center" }}>Edit Villager</h1>
            </div>
            <div className='form-background-box'>
                <Form>
                    <FormGroup>
                        <div className='form-label'>
                            <Label for="name">Name</Label>
                        </div>
                        <div className="form-input">
                            <Input type="text" name="name" placeholder="Enter text here" onChange={handleChangeNpc} value={editNpc.name} />
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <Label for="address">Address</Label>
                        <div className="form-input">
                            <Input type="text" name="address" placeholder="Enter text here" onChange={handleChangeNpc} value={editNpc.address} />
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <Label for="likes">Likes</Label>
                        <div className="form-input">
                            <Input type="text" name="likes" placeholder="Enter text here" onChange={handleChangeNpc} value={editNpc.likes} />
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <Label for="image">Image URL</Label>
                        <div className="form-input">
                            <Input type="url" name="image" placeholder="Enter URL here" onChange={handleChangeNpc} value={editNpc.image} />
                        </div>
                    </FormGroup>
                    <Button color="primary" size="lg" onClick={handleSubmit} name="submit">
                        <div className="form-label-button">
                            Submit
                        </div>
                    </Button>
                </Form>
            </div>

        </div>
    )
}

export default SVEdit