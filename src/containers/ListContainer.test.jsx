/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ListContainer from './ListContainer';
import ThemeProvider from '../state/ThemeProvider';
//import { rest } from 'msw';
//import { setupServer } from 'msw';

//server here

describe('list container component', () => {
  //server listen/close here

  it('displays a list of Star Trek characters', async () => {
    render(
      <ThemeProvider>
        <ListContainer />
      </ThemeProvider>
    );

    const loadingScreen = await screen.getByText('Loading...');
    expect(loadingScreen).toMatchInlineSnapshot(`
      <h2>
        Loading...
      </h2>
    `);

    // return waitFor(async () => {
    //   const starTrekList = await screen.findByRole('list', {
    //     name: 'Character Grid',
    //   });
    //   expect(starTrekList).not.toBeEmptyDOMElement();
    // });
  });
});
