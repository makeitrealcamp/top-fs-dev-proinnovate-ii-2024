export interface Task {
  id: number;
  title: string;
  description: string;
  status: 'IN_PROGRESS' | 'COMPLETED' | 'PENDING';
}
