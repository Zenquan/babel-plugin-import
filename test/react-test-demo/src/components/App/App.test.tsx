import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { App } from './App';

const mockStore = configureStore();

test('counter text is in document', async () => {
  render(
    <Provider store={mockStore({ counter: 0 })}>
      <App />
    </Provider>
  );
  const counter = await waitFor(() => screen.getByText(/Counter: 0/));
  expect(counter).toBeInTheDocument();
});
