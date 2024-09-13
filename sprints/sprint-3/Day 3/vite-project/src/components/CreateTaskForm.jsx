import PropTypes from 'prop-types';

export const CreateTaskForm = ({setCount}) => {
  return (
    <form>
        <label htmlFor="task">Task name: </label>
        <input type="text" placeholder="Task name" name="task"  aria-label="task"/>
        <button type="submit" onClick={setCount}>Create task</button>
    </form>
  )
}


CreateTaskForm.propTypes = {
  setCount: PropTypes.func.isRequired
}