import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../redux/actions';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleToggle = (taskId) => {
    dispatch(toggleTask(taskId));
  };

  return (
    <ul className="list-group">
      {tasks.map(task => (
        <li key={task.id} className={`list-group-item ${task.completed ? 'list-group-item-success' : ''}`}>
          <span>{task.text}</span>
          <div className="btn-group float-end">
            <button
              className="btn btn-outline-success"
              onClick={() => handleToggle(task.id)}
            >
              {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
            </button>
            <button
              className="btn btn-outline-danger"
              onClick={() => dispatch(deleteTask(task.id))}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
