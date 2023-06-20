import React from 'react';


function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className='text-4xl text-green-400'>Check</th>
          <th className='text-3xl'>Tarea</th>
          <th className='text-3xl'>Acción</th>
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