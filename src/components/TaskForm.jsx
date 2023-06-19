import React, { useState } from 'react';


function TaskForm({ addTask }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') return;
    addTask(title);
    setTitle('');
  };

  return (

      <form onSubmit={handleSubmit} className="flex space-x-6">

      <input
          className="border-black-100 rounded px-2 py-1 flex-grow"
          type="text"
          placeholder="Ingrese una tarea"
          value={title}
          onChange={(e) => setTitle(e.target.value)}

        />

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold rounded p-1"
        >
          Agregar
        </button>
      </form>
  );
}

export default TaskForm;
