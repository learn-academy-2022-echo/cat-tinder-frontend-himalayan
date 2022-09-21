import { screen, render } from "@testing-library/react";
import Footer from "./Footer";

describe("<Footer />", () => {
    it("renders without crashing", () => {
        render(<Footer />)
        const showLink = screen.getByText(/made by Rashad and Hieu/i)
        expect(showLink).toBeInTheDocument()
    })

})