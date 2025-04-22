import React from 'react';

const TaskItem = ({ task, setTasks, setEditingTask }) => {
  const handleToggle = () => {
    setTasks(prevTasks => 
      prevTasks.map(t => 
        t.id === task.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const handleEdit = () => {
    setEditingTask(task);
  };

  const handleDelete = () => {
    setTasks(prevTasks => prevTasks.filter(t => t.id !== task.id));
  };

  // Formato de fecha
  const formattedDate = task.createdAt.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <li className={`rounded-lg overflow-hidden shadow-md transition-all duration-300
                   ${task.completed ? 'bg-green-100 border-l-4 border-green-500' : 'bg-white border-l-4 border-blue-500'}`}>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className={`text-xl font-semibold 
                       ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
            {task.title}
          </h3>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                         bg-gray-100 text-gray-800">
            {formattedDate}
          </span>
        </div>
        
        <p className={`text-gray-600 mb-4 ${task.completed ? 'line-through opacity-70' : ''}`}>
          {task.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          <button 
            onClick={handleToggle} 
            className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors duration-200
                      ${task.completed 
                       ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' 
                       : 'bg-green-100 text-green-700 hover:bg-green-200'}`}
          >
            {task.completed ? 'Desmarcar' : 'Completar'}
          </button>
          <button 
            onClick={handleEdit} 
            className="flex-1 py-2 rounded-md bg-blue-100 text-blue-700 
                     hover:bg-blue-200 text-sm font-medium transition-colors duration-200"
          >
            Editar
          </button>
          <button 
            onClick={handleDelete} 
            className="flex-1 py-2 rounded-md bg-red-100 text-red-700 
                     hover:bg-red-200 text-sm font-medium transition-colors duration-200"
          >
            Eliminar
          </button>
        </div>
      </div>
    </li>
  );
};

export default TaskItem;