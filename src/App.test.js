import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  window.history.replaceState({}, '', '/#/');
  Object.defineProperty(window, 'scrollY', { configurable: true, value: 0, writable: true });
  window.scrollTo = jest.fn(({ top }) => { window.scrollY = top; });
});

test('page navigation resets scroll, focuses the heading, and Back restores the previous position', async () => {
  render(<App />);
  window.scrollY = 600;
  fireEvent.scroll(window);
  fireEvent.click(screen.getByRole('link', { name: 'Projects', exact: true }));
  await waitFor(() => expect(document.activeElement).toBe(screen.getByRole('heading', { name: 'Projects', level: 1 })));
  expect(window.scrollY).toBe(0);
  act(() => window.history.back());
  await waitFor(() => expect(document.activeElement).toBe(screen.getByRole('heading', { name: 'Ben Chesser', level: 1 })));
  expect(window.scrollY).toBe(600);
});

test('project detail links resolve content without needing a browser hashchange event', async () => {
  render(<App />);
  fireEvent.click(screen.getByRole('link', { name: 'Projects', exact: true }));
  fireEvent.click(screen.getByRole('heading', { name: 'Localized' }));
  await waitFor(() => expect(document.activeElement).toBe(screen.getByRole('heading', { name: 'Localized', level: 1 })));
  expect(window.location.hash).toBe('#/projects/localized');
});
