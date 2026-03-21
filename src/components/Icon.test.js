import React from 'react';
import { render } from '@testing-library/react';
import Icon from './Icon';

describe('Icon component', () => {
    const testCases = [
        { name: 'Galaxy', expected: '🌌' },
        { name: 'Globe', expected: '🕸️' },
        { name: 'Particle', expected: '⚛️' },
        { name: 'Brain', expected: '🧠' },
        { name: 'Heart', expected: '❤️' },
        { name: 'Pixel', expected: '🔳' },
        { name: 'Key', expected: '🔑' },
        { name: 'Google', expected: 'G' }
    ];

    testCases.forEach(({ name, expected }) => {
        test(`renders the correct emoji for "${name}"`, () => {
            const { getByText } = render(<Icon name={name} />);
            expect(getByText(expected)).toBeInTheDocument();
        });
    });

    test('renders the default "📡" for an unknown name', () => {
        const { getByText } = render(<Icon name="Unknown" />);
        expect(getByText('📡')).toBeInTheDocument();
    });

    test('applies the className prop correctly', () => {
        const testClass = 'custom-class';
        const { container } = render(<Icon name="Galaxy" className={testClass} />);
        const span = container.firstChild;
        expect(span).toHaveClass(testClass);
    });
});
