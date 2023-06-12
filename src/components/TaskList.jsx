import React from 'react';

function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <div class="flex items-center ...">
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center space-x-2"
          >
            <div class="py-8">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span className={` ${task.completed ? 'completed' : ''}`}>{task.title}</span>
            </div>
            <div class="py-4">
            <button
              onClick={() => deleteTask(task.id)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Eliminar
            </button>
            </div>
          </li>
        ))}
      </ul>
  </div>
  );
}

export default TaskList;
