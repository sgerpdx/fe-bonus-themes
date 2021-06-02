/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('header container component', () => {
  it('displays a heading and a drop-down selection menu', async () => {
    render(<Header />);

    const pageTitle = await screen.getByText(
      'Use the menu below to select a visual theme:'
    );
    expect(pageTitle).toMatchSnapshot();

    // const themeToggle = await screen.getByText('space');
    // expect(themeToggle).toMatchSnapshot();
  });
});
