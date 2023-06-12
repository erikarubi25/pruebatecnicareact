import React from 'react';

function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    
      <ul className="grid grid-cols-1 gap-4">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center space-x-4"
          >
            
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              className="form-checkbox h-4 w-4 text-blue-500"
            />
            <span className={` ${task.completed ? 'completed' : ''}`}>{task.title}</span>
            
            
            <button
              onClick={() => deleteTask(task.id)}
              className="bg-blue-500 text-white px-2 py-1 rounded"
            >
              Eliminar
            </button>
            
          </li>
        ))}
      </ul>
 
  );
}

export default TaskList;
