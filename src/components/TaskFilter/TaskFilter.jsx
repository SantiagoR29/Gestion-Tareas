import React from 'react';

const TaskFilter = ({ filter, setFilter }) => {
  return (
    <div className="flex justify-center gap-4">
      <button 
        onClick={() => setFilter('all')} 
        className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300
                  ${filter === 'all' 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
      >
        Todas
      </button>
      <button 
        onClick={() => setFilter('active')} 
        className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300
                  ${filter === 'active' 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
      >
        Activas
      </button>
      <button 
        onClick={() => setFilter('completed')} 
        className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300
                  ${filter === 'completed' 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
      >
        Completadas
      </button>
    </div>
  );
};

export default TaskFilter;