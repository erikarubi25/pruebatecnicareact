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

      <form onSubmit={handleSubmit} className="flex space-x-2">

      <input
          className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-4 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-00 sm:text-sm sm:leading-6"
          placeholder="Ingrese una tarea"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}

        />

        <button
        className="flex-none rounded-md bg-indigo-500 px-4.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          type="submit"
        >
          Agregar
        </button>
      </form>
  );
}

export default TaskForm;
