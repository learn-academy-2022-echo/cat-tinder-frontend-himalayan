import React, { useState } from 'react'
import SVEdit from './SVEdit'
import { screen, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

describe('<SVEdit/>', () => {
    it("SVEdit page renders for the user", () => {
        render(
            <BrowserRouter>
                <SVEdit/>
            </BrowserRouter>
        )
        expect(screen.getByText("Edit Npc")).toBeInTheDocument()
    })
    it("displays a form for the user", () => {
        render(
            <BrowserRouter>
                <SVEdit/>
            </BrowserRouter>
        )
        const formThing = screen.getAllByRole('textbox')
        screen.debug(formThing)
        expect(formThing.length).toEqual(4)
    })
})