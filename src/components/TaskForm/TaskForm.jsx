import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TaskForm = ({ tasks, setTasks, editingTask, setEditingTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
    } else {
      setTitle('');
      setDescription('');
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;

    if (editingTask) {
      setTasks(tasks.map(task => (task.id === editingTask.id ? { ...task, title, description } : task)));
      setEditingTask(null);
    } else {
      setTasks([...tasks, { id: uuidv4(), title, description, completed: false, createdAt: new Date() }]);
    }

    setTitle('');
    setDescription('');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-400">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        {editingTask ? 'Editar Tarea' : 'Nueva Tarea'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Título</label>
          <input
            id="title"
            type="text"
            autoFocus
            required
            pattern="[a-zA-Z0-9\s]+"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="¿Qué necesitas hacer?"
            className="border border-gray-400 rounded-lg p-3 w-full 
                     text-gray-700 focus:outline-none focus:ring-2 
                     focus:ring-indigo-500 focus:border-transparent
                     transition duration-200"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Añade detalles adicionales..."
            className="border border-gray-400 rounded-lg p-3 w-full h-24
                     text-gray-700 focus:outline-none focus:ring-2 
                     focus:ring-indigo-500 focus:border-transparent
                     transition duration-200 resize-none"
          />
        </div>
        <button 
          type="submit" 
          className={`w-full py-3 px-4 border border-blue-900 rounded-lg font-medium 
                    text-white transition duration-300 ease-in-out 
                    ${editingTask 
                      ? 'bg-indigo-600 hover:bg-indigo-700' 
                      : 'bg-blue-600 hover:bg-blue-700'}`}
        >
          {editingTask ? 'Actualizar Tarea' : 'Agregar Tarea'}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;