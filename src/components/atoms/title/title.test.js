//test title component

import React from 'react';
import { render } from '@testing-library/react';
import Title from './title';

describe('Title', () => {
    it('should render title', () => {
        const { getByText } = render(<Title level={"h1"} >test</Title>);
        const title = getByText('test');
        expect(title).toBeInTheDocument();
    });
});