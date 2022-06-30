import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import React from "react";
import LoginPage from "../login";
import { BrowserRouter } from 'react-router-dom';
import Button from "../../components/Button";

test('Should render login', () => {
    render(<BrowserRouter><LoginPage /></BrowserRouter>)

    expect(screen.getByTestId('email-input')).toBeInTheDocument();
    expect(screen.getByTestId('password-input')).toBeInTheDocument();

    const btnLoginElement = screen.getByRole('button', {
        name: /sign in/i
    })
    expect(btnLoginElement).toBeInTheDocument();

    /* const mockFunction = jest.fn(() => console.info('button clicked'));
    const { getByTestId } = render(<Button onClick={mockFunction} />);
    const btnLogin = getByTestId('btnlogin');
    userEvent.click(btnLogin);
    expect(mockFunction).toHaveBeenCalledTimes(1); */

})