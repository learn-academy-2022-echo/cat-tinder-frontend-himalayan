import { render, screen } from "@testing-library/react"
import NotFound from "./NotFound"
import { BrowserRouter } from "react-router-dom"
import userEvent from '@testing-library/user-event'

describe("<NotFound />", () => {
    it("render without crashing", () => {
        render(<NotFound />)
        const showLink = screen.getByText(/Sorry not found/i)
        expect(showLink).toBeInTheDocument()
    })
    it("has working links", () => {
        render(
            <BrowserRouter>
                <NotFound />
            </BrowserRouter>
        )
        userEvent.click(screen.getByText(/Click here to return home/i))
        expect(screen.getByText(/Click here to return home/i)).toBeInTheDocument()
    })
})