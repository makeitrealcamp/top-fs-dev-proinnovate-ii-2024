import { describe, beforeEach, test, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import PostList from './PostList';
import axios from 'axios';
import { vi } from 'vitest';
import { BASE_URL } from '../mockAxiosFn/fetchData';

vi.mock('axios');

describe('PostList Component', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  test('displays loading initially', () => {
    render(<PostList />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('renders post list after successful fetch', async () => {
    const mockPosts = [
      { id: 1, title: 'First Post' },
      { id: 2, title: 'Second Post' },
    ];

    axios.get.mockResolvedValueOnce({ data: mockPosts });

    render(<PostList />);

    const postItems = await waitFor(() => screen.getAllByTestId('post-item'));
    expect(postItems).toHaveLength(2);
    expect(postItems[0]).toHaveTextContent('First Post');
    expect(postItems[1]).toHaveTextContent('Second Post');

    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/posts`);
  });

  test('displays error message on fetch failure', async () => {
    axios.get.mockRejectedValueOnce(new Error('Failed to fetch'));

    render(<PostList />);

    const errorMessage = await waitFor(() => screen.getByText(/error/i));
    expect(errorMessage).toHaveTextContent('Error: Failed to fetch');

    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/posts`);
  });
});
