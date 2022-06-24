import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from 'react-router-dom';
import RegisterPage from '../register';

test('Should render login', () => {
    render(<BrowserRouter><RegisterPage /></BrowserRouter>)

    expect(screen.getByTestId('email-input')).toBeInTheDocument();
    expect(screen.getByTestId('password-input')).toBeInTheDocument();

    const btnLoginElement = screen.getByRole('button', {
        name: /sign up/i
    })
    expect(btnLoginElement).toBeInTheDocument();

})