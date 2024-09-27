export const Form = ({ onSubmit }: { onSubmit: (a: unknown) => void }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.elements[0] as HTMLInputElement;
    if (!input) {
      return;
    }
    onSubmit(input.value);
  };

  return (
    <div>
      Form
      <form onSubmit={handleSubmit}>
        <label htmlFor="createTask">insert your task</label>
        <input id="createTask" placeholder="insert your task" type="text" />
        <button role="button"> Save task</button>
      </form>
    </div>
  );
};
