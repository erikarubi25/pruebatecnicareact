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
    <div class="flex items-center ...">
      
      <form onSubmit={handleSubmit} className="flex space-x-2">
      <div class="py-4">  
      <input
          type="text"
          placeholder="Ingrese una tarea"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1 flex-grow"
        />
      </div>
      <div class="py-4">
        <button
          type="submit"
          className="bg-blue-500 text-white px-2 py-1 rounded"
        >
          Agregar
        </button>
        </div>
      </form>
      
    </div>
  );
}

export default TaskForm;
