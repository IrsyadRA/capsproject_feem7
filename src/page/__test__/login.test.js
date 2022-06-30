import { render, screen } from "@testing-library/react";
import React from "react";
import LoginPage from "../login";
import { BrowserRouter } from 'react-router-dom';

test('Should render login', () => {
    render(<BrowserRouter><LoginPage /></BrowserRouter>)

    expect(screen.getByTestId('email-input')).toBeInTheDocument();
    expect(screen.getByTestId('password-input')).toBeInTheDocument();

    const btnLoginElement = screen.getByRole('button', {
        name: /sign in/i
    })
    expect(btnLoginElement).toBeInTheDocument();

})