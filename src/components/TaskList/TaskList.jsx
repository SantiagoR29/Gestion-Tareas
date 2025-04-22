import React from 'react';
import TaskItem from '../TaskItem/TaskItem';

const TaskList = ({ tasks, filter, setTasks, setEditingTask }) => {
  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  if (filteredTasks.length === 0) {
    return (
      <div className="text-center py-10 bg-gray-50 rounded-lg">
        <p className="text-gray-400 text-lg">
          {filter === 'all' 
            ? 'No hay tareas. ¡Añade una nueva!' 
            : filter === 'active' 
              ? 'No hay tareas activas.' 
              : 'No hay tareas completadas.'}
        </p>
      </div>
    );
  }

  return (
    <ul className="space-y-4">
      {filteredTasks.map(task => (
        <TaskItem 
          key={task.id} 
          task={task} 
          setTasks={setTasks} 
          setEditingTask={setEditingTask} 
        />
      ))}
    </ul>
  );
};

export default TaskList;