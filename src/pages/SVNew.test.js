import { render, screen } from "@testing-library/react"
import SVNew from "./SVNew"
import { BrowserRouter } from "react-router-dom"
import userEvent from '@testing-library/user-event'

describe("<SVNew />", () => {
    it("render without crashing", () => {
        render(<SVNew />)
        const showLink = screen.getByText(/Submit Npc/i)
        expect(showLink).toBeInTheDocument()
    })
    // it("has working links", () => {
    //     render(
    //         <BrowserRouter>
    //             <SVNew />
    //         </BrowserRouter>
    //     )
    //     userEvent.click(screen.getByText(/Submit Npc/i))
    //     expect(screen.getByText(/Submit Npc/i)).toBeInTheDocument()
    // })
})