//test logo component

import React from 'react';
import { render } from '@testing-library/react';
import TextLogo from './text-logo';

describe('TextLogo', () => {
    it('should render TextLogo', () => {
        const { getByText } = render(<TextLogo></TextLogo>);
        const textLogo = getByText('PROXIMA');
        expect(textLogo).toBeInTheDocument();
    });
});