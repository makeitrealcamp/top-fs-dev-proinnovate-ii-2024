import { describe, expect, it } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useTasks } from './useTasks';

describe('useTasks', () => {
  it('should initialize with an empty array', () => {
    const { result } = renderHook(() => useTasks());
    console.log({ result });
    expect(result.current.state).toEqual([]);
  });

  it('should add a task', () => {
    const { result } = renderHook(() => useTasks());
    act(() => {
      result.current.addTask('Task 1');
    });
    expect(result.current.state.length).toBe(1);
    expect(result.current.state[0]).toMatchObject({
      id: expect.any(Number),
      title: 'Task 1',
      completed: false,
    });
  });

  it('should delete a task', () => {
    const { result } = renderHook(() => useTasks());
    act(() => {
      result.current.addTask('Task 1');
    });
    act(() => {
      result.current.deleteTask(result.current.state[0].id);
    });
    expect(result.current.state.length).toBe(0);
  });

  it('should change the status of the task', () => {
    const { result } = renderHook(() => useTasks());
    act(() => {
      result.current.addTask('Task 1');
    });
    act(() => {
      result.current.toggleTask(result.current.state[0].id);
    });
    expect(result.current.state[0].completed).toBe(true);
  });
});
