import { Tag } from '@muffin-tin/tag';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('something truthy and falsy', () => {
  it('true to be true', () => {
    expect(true).toBe(true);
  });

  it('false to be false', () => {
    expect(false).toBe(false);
  });
});

test('renders as the correct HTML', async () => {
  // ARRANGE
  render(<Tag>div tag</Tag>);

  expect(screen.getByText('div tag')).toMatchInlineSnapshot(`
    <div>div tag</div>
  `);
});
