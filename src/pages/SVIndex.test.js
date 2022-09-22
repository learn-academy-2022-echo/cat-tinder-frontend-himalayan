import { screen, render } from '@testing-library/react'
import SVIndex from './SVIndex'
import mockSV from '../mockSV'
import { BrowserRouter } from 'react-router-dom'


describe("<SVIndex/>", () => {
  test("renders a card for each npc that is passed down to component", () => {
    render(
      <BrowserRouter>
       <SVIndex npcs={mockSV}/>
      </BrowserRouter>
    )
    mockSV.forEach(npcs => {
      const npcsElement = screen.getByText(npcs.name)
      expect(npcsElement).toBeInTheDocument()
    })
  })
})