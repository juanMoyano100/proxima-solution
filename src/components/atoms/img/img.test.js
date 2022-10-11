// test img component

import React from 'react';
import { render } from '@testing-library/react';
import Img from './img';

describe('Img', () => {
    it('should render img', () => {
        const { getByAltText } = render(<Img alt="test" />);
        const img = getByAltText('test');
        expect(img).toBeInTheDocument();
    });
});
