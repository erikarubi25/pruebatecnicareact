import React from 'react';

function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <table class="table-fixed">
      
      <tbody>
        
          <ul className="grid grid-flow-row auto-rows-max md:auto-rows-min">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="flex items-center space-x-4"
              >
              <tr>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="form-checkbox h-4 w-4 text-blue-500"
                />
                
                <span className={` ${task.completed ? 'completed' : ''}`}>{task.title}</span>
                </tr>
                
                <tr>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  Eliminar
                </button>
                </tr>
              </li>
              
            ))}
          </ul>
          
        </tbody>
      </table>
  );
}

export default TaskList;
