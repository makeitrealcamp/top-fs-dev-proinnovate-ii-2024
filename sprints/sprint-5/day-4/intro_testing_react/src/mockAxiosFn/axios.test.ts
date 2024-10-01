import { describe, it, expect, vi } from 'vitest';
import axios from 'axios';
import fetchData, { BASE_URL } from './fetchData';

vi.mock('axios', () => ({
  default: {
    get: vi.fn(() => Promise.resolve({ data: [], status: 200 })),
    post: vi.fn(() => Promise.resolve({ data: [], status: 201 })),
  },
}));

describe.skip('axios', () => {
  it('should fetch data', async () => {
    axios.get.mockResolvedValue({
      data: [
        {
          userId: 1,
          id: 1,
          title: 'title',
          body: 'body',
        },
      ],
    });
    const response = await fetchData();
    console.log(response);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/posts`);
    expect(response).toBeDefined();
    expect(response).toMatchObject([
      {
        userId: 1,
        id: 1,
        title: 'title',
        body: 'body',
      },
    ]);
  });
});
