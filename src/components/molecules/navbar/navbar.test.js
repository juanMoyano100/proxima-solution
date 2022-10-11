//Test  navbar component

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Navbar from './navbar';

//navbar has isShowing prop and setisShowing prop
describe('Navbar', () => {
    it('should render navbar', () => {
        const { getByText } = render(<Navbar isShowing={true} setisShowing={true}></Navbar>);
        const navbar = getByText('Home');
        expect(navbar).toBeInTheDocument();
    });
});
