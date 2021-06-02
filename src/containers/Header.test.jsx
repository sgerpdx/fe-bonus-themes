/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import ThemeProvider from '../state/ThemeProvider';

describe('header container component', () => {
  it('displays a heading and a drop-down selection menu', async () => {
    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );

    const controlInstructions = await screen.getByText(
      'Use the menu below to select a visual theme:'
    );
    expect(controlInstructions).toMatchSnapshot();
  });
});
