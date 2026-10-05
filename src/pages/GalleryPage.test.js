import { fireEvent, render, screen } from '@testing-library/react';
import GalleryPage from './GalleryPage';

jest.mock('../hooks/useModalDialog', () => ({ __esModule: true, default: () => ({ current: null }) }));

test('keeps a thumbnail preview until the original loads, and resets on reopening', () => {
  const { container } = render(<GalleryPage />);
  const open = screen.getByRole('button', { name: 'View Montreux, Switzerland full size' });
  fireEvent.click(open);
  const caption = container.querySelector('.gallery-fullscreen-meta');
  expect(container.querySelector('.gallery-fullscreen-preview')).toHaveAttribute('src', expect.stringContaining('-480-v2.jpg'));
  const original = container.querySelector('.gallery-fullscreen-original');
  expect(original).not.toHaveClass('is-loaded');
  fireEvent.load(original);
  expect(original).toHaveClass('is-loaded');
  expect(container.querySelector('.gallery-fullscreen-preview')).toBeNull();
  expect(container.querySelector('.gallery-fullscreen-meta')).toBe(caption);
  fireEvent.click(container.querySelector('.gallery-fullscreen-close'));
  fireEvent.click(open);
  expect(container.querySelector('.gallery-fullscreen-preview')).not.toBeNull();
  fireEvent.error(container.querySelector('.gallery-fullscreen-original'));
  expect(container.querySelector('.gallery-fullscreen-preview')).not.toBeNull();
  expect(container.querySelector('.gallery-fullscreen-img')).toHaveAttribute('aria-busy', 'false');
});
