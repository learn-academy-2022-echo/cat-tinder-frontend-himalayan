import { render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import SVShow from "./SVShow"
import mockSV from "../mockSV";


const renderComponent = () => {
  render(
    <MemoryRouter initialEntries={["/SVshow/1"]}>
      <Routes>
        <Route path='SVShow/:id' element={<SVShow npcs={mockSV} />}/>
      </Routes>
    </MemoryRouter>
  )
} 
describe('SVShow', () => { 
    test("render a card with what a npc likes", ()=>{
      renderComponent()
      expect(screen.getByText(mockSV[0].likes)).toBeInTheDocument()
    })
 })
