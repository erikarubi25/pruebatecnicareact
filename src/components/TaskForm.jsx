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
        >
          Agregar
        </button>
      </form>
  );
}

export default TaskForm;
