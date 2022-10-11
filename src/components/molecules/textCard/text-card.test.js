//test card component

import React from 'react';
import { render } from '@testing-library/react';
import TextCard from './text-card';

describe('TextCard', () => {
    it('should render TextCard', () => {
        const { getByText } = render(<TextCard>test</TextCard>);
        const textCard = getByText('test');
        expect(textCard).toBeInTheDocument();
    });
}
);
