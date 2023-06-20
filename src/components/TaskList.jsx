import React from 'react';


function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className='pt-8 text-3xl text-pink-500'>Check</th>
          <th className='pt-8 text-3xl text-pink-600'>Tarea</th>
          <th className='pt-8 text-3xl text-pink-700'>Acción</th>
        </tr>
      </thead>
      <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                />
              </td>
              <td className={task.completed ? 'completed' : ''}>{task.title}</td>
              <td><button onClick={() => deleteTask(task.id)}>Eliminar</button></td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default TaskList;