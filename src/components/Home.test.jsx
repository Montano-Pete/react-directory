import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';
import { ProvideAuth } from '../context/ProvideAuth';

it('should render a Home page', () => {
  const { container } = render(
    <MemoryRouter>
      <ProvideAuth>
        <Home />
      </ProvideAuth>
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});
