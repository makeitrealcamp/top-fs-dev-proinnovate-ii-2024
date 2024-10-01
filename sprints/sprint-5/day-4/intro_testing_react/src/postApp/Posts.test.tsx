import { describe, it, expect, vi } from 'vitest';
import { getAllByTestId, render, waitFor } from '@testing-library/react';
import { Posts } from './Posts';

describe('Posts using fetch', () => {
  it('should display loading message', async () => {
    const { getByText } = render(<Posts />);
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  it('should display posts', async () => {
    const mockPosts = [
      {
        userId: 1,
        id: 1,
        title: 'mocked title',
        body: 'body',
      },
      {
        userId: 2,
        id: 2,
        title: 'mocked title 2',
        body: 'my awesome body',
      },
    ];
    const mockFetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockPosts),
        ok: true,
      } as Response)
    );

    globalThis.fetch = mockFetch as any;

    const { getAllByTestId } = render(<Posts />);
    const posts = await waitFor(() => getAllByTestId('post-item'));

    console.log({ posts });

    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(posts).toHaveLength(2);
    expect(posts[1]).toHaveTextContent('my awesome body');
  });

  it('should display error message', async () => {
    // const mockFetch = vi.fn(() =>
    //   Promise.reject(new Error('Network response was not ok!'))
    // );

    const mockFetch = vi.fn(() =>
      Promise.resolve({
        ok: false,
        status: 400,
        statusText: 'Bad Request',
      } as Response)
    );

    globalThis.fetch = mockFetch as any;

    const { getByText } = render(<Posts />);
    const error = await waitFor(() => getByText(/error/i));

    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(error).toBeInTheDocument();
    expect(error).toHaveTextContent('Network response was not ok');
  });
});

// challenge 
/* testing using axios */
/* testing using fetch POST*/
/* testing implementing custom hook */
/* testing implementing abort controller */