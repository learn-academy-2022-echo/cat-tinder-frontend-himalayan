import { React, useState } from "react"
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import { useNavigate } from "react-router-dom"


const SVNew = ({ createNpc }) => {
    const navigate = useNavigate()
    const [newNpc, setNewNpc] = useState({
        name: "",
        likes: "",
        image: ""
    })

    const handleChange = (e) => {
        setNewNpc({ ...newNpc, [e.target.name]: e.target.value })
    }
    const handleSubmit = () => {
        createNpc(newNpc)
        navigate("/svindex")
    }

    return (
        <>
            <div className="form-background-box">
                <Form>
                    <FormGroup>
                        <div className="form-label">
                            <Label for="name" >Name</Label>
                        </div>
                        <div className="form-input">
                            <Input type="text" name="name" onChange={handleChange} value={newNpc.name} />
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <Label for="address">Address</Label>
                        <div className="form-input">
                            <Input type="text" name="address" onChange={handleChange} value={newNpc.address} />
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <Label for="likes">Likes</Label>
                        <div className="form-input">
                            <Input type="text" name="likes" onChange={handleChange} value={newNpc.likes} />
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <Label for="image">Image URL</Label>
                        <div className="form-input">
                            <Input type="text" name="image" onChange={handleChange} value={newNpc.image} />
                        </div>
                    </FormGroup>
                    <div className="button">
                        <Button color="primary" size="lg" onClick={handleSubmit} name="submit">
                            <div className="form-label-button">
                                Submit Npc
                            </div>
                        </Button>
                    </div>
                </Form>
            </div>
        </>
    )
}
export default SVNew