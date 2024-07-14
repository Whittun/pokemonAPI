import { render, screen } from '@testing-library/react';

import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';

it('test', () => {
  render(
    <BrowserRouter>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </BrowserRouter>,
  );
  const text = screen.queryByText('Search');
  expect(text).toBeInTheDocument();
});
