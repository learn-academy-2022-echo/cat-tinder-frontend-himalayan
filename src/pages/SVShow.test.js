import { render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import SVShow from "./SVShow"
import mockSV from "../mockSV"


const renderComponent = () => {
  render(
    <MemoryRouter initialEntries={["/svshow/1"]}>
      <Routes>
        <Route path='svshow/:id' element={<SVShow npcs={mockSV} />}/>
      </Routes>
    </MemoryRouter>
  )
} 
describe('svshow', () => { 
  let npc = mockSV[0]
    it("render a card with what a npc likes", ()=>{
      renderComponent()
      screen.debug()
      expect(screen.getByText(npc.name)).toBeInTheDocument()
    })
 })
