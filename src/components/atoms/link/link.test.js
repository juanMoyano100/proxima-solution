//test link component

import React from 'react';
import { render } from '@testing-library/react';
import Link from './link';


describe('Link', () => {
    //check if link is rendered
    it('should render link', () => {
        const { getByText } = render(<Link>test</Link>);
        const link = getByText('test');
        expect(link).toBeInTheDocument();
    });

    //check if link is clickable
    it('should be clickable', () => {
        const { getByText } = render(<Link href={"#"}>test</Link>);
        const link = getByText('test');        
        expect(link).toHaveAttribute('href');
    });
});





