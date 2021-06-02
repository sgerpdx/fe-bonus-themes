/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ListContainer from './ListContainer';
import ThemeProvider from '../state/ThemeProvider';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import characterData from '../services/data.json';

const server = setupServer(
  rest.get(
    'https://trek-dex.herokuapp.com/api/v1/characters',
    (req, res, ctx) => {
      return res(ctx.json(characterData));
    }
  )
);

describe('list container component', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

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

    return waitFor(async () => {
      const starTrekList = await screen.findByRole('list', {
        name: 'Character Grid',
      });
      expect(starTrekList).not.toBeEmptyDOMElement();

      await screen.getByAltText('Scotty');
    });
  });
});
