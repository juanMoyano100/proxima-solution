//test button component

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './button';

describe('Button', () => {
    it('should render button', () => {
        const { getByText } = render(<Button>Click me</Button>);
        const button = getByText('Click me');
        expect(button).toBeInTheDocument();
    });

    it('should call onClick', () => {
        const onClick = jest.fn();
        const { getByText } = render(<Button onClick={onClick}>Click me</Button>);
        const button = getByText('Click me');
        fireEvent.click(button);
        expect(onClick).toHaveBeenCalled();
    });
});
