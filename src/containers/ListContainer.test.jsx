/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import ListContainer from './ListContainer';
//import { rest } from 'msw';
//import { setupServer } from 'msw';

//server here

describe('list container component', () => {
  //server listen/close here

  it('displays a list of Star Trek characters', async () => {
    render(<ListContainer />);

    const loadingScreen = await screen.getByText('Loading...');
    expect(loadingScreen).toMatchInlineSnapshot(`
      <h2>
        Loading...
      </h2>
    `);
  });
});
