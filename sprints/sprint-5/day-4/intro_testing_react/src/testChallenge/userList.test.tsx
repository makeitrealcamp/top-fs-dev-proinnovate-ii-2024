import { render, screen, waitFor } from '@testing-library/react';
import { beforeEach, vi, describe, expect, test, afterEach } from 'vitest';
import UserList from './UserList';
import { act } from 'react';

const mockUsers = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
];

// const mockFetch = vi.fn().mockResolvedValue(
//   {
//     json: () => Promise.resolve(mockUsers),
//     ok: true,
//   } as Response
// )

// const mockFetch = vi.fn(() =>
//   Promise.resolve({
//     json: () => Promise.resolve(mockUsers),
//     ok: true,
//   } as Response)
// );

describe.only('UserList', () => {
  beforeEach(() => {
    const mockFetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockUsers),
        ok: true,
      } as Response)
    );

    globalThis.fetch = mockFetch as any;
    render(<UserList />);
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  test('should render loading text', () => {
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('should render user list', async () => {
    const userItems = await waitFor(() => screen.getAllByTestId('user-item'));
    expect(userItems).toHaveLength(2);
    expect(userItems[0]).toHaveTextContent('John Doe');
    expect(userItems[1]).toHaveTextContent('Jane Doe');
  });

  test.only('the abort Controller', async () => {

    const spyAbortController = vi.spyOn(AbortController.prototype, 'abort');
    const spyConsoleLog = vi.spyOn(console, 'log');

    let resolveFetch: () => void;
    const mockFetchPromise = new Promise((resolve) => {
      resolveFetch = () =>
        resolve({
          json: () => Promise.resolve(mockUsers),
          ok: true,
        } as Response);
    });

    globalThis.fetch = vi.fn(() => mockFetchPromise);

    const { unmount, container } = render(<UserList />);
    screen.debug();
    unmount();
    console.log({ container });

    act(() => {
      resolveFetch();
    });

    screen.debug();
    expect(spyAbortController).toHaveBeenCalledTimes(1);
    expect(spyConsoleLog).toHaveBeenCalledWith('Fetch aborted');

    spyAbortController.mockRestore();
  });
});
