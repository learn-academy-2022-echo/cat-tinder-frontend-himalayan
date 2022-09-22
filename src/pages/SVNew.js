import { React, useState } from "react"
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import { BrowserRouter, useNavigate } from "react-router-dom"


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
        <div>
            <BrowserRouter>
            <Form>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" name="name" onChange={handleChange} value={newNpc.name} />
                </FormGroup>
                <Button onClick={handleSubmit} name="submit">
                    Submit Npc
                </Button>
            </Form>
            </BrowserRouter>
        </div>
        </>
    )
}
export default SVNew