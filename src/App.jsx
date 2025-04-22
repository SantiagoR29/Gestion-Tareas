import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import TaskFilter from './components/TaskFilter/TaskFilter';
import TaskStats from './components/TaskStats/TaskStats';

const initialTasks = [
  {
    id: uuidv4(),
    title: "Actualizar:",
    description: "Editalo, eliminado y completa la tarea",
    completed: false,
    createdAt: new Date()
  }
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState('all');
  const [editingTask, setEditingTask] = useState(null);

  return (
    <div className="bg-gradient-to-br from-purple-200 to-indigo-500 rounded-xl shadow-2xl p-8 w-full max-w-3xl mx-auto border border-purple-400">
      <h1 className="text-4xl font-extrabold text-center text-indigo-800 mb-8 tracking-tight">
        Gestor de Tareas
      </h1>
      <div className="space-y-8">
        <TaskForm 
          tasks={tasks} 
          setTasks={setTasks} 
          editingTask={editingTask} 
          setEditingTask={setEditingTask} 
        />
        <TaskStats tasks={tasks} />
        <TaskFilter filter={filter} setFilter={setFilter} />
        <TaskList 
          tasks={tasks} 
          filter={filter} 
          setTasks={setTasks} 
          setEditingTask={setEditingTask} 
        />
      </div>
    </div>
  );
}

export default App;