//test all modal component

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Modal from './modal';

//modal has isShowing prop and setisShowing prop
describe('Modal', () => {
    it('should render modal', () => {
        const { getByText } = render(<Modal isShowing={true} setisShowing={true}>test</Modal>);
        const modal = getByText('test');
        expect(modal).toBeInTheDocument();
    });
});