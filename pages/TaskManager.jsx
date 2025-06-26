import React, { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Button } from '../src/components/Button';
import { Card } from '../src/components/Card';

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('All');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === '') return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'Active') return !task.completed;
    if (filter === 'Completed') return task.completed;
    return true;
  });

  return (
    <Card>
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">Task Manager</h1>
      <form onSubmit={handleAddTask} className="flex gap-2 mb-6">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
          className="flex-grow p-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Button type="submit" variant="primary">Add Task</Button>
      </form>
      <div className="flex justify-center gap-2 mb-6">
        {['All', 'Active', 'Completed'].map(f => (
          <Button key={f} variant={filter === f ? 'primary' : 'secondary'} onClick={() => setFilter(f)}>
            {f}
          </Button>
        ))}
      </div>
      <ul className="space-y-3">
        {filteredTasks.length > 0 ? filteredTasks.map(task => (
          <li key={task.id} className="flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-sm">
            <span onClick={() => toggleTask(task.id)} className={`cursor-pointer ${task.completed ? 'line-through text-gray-500' : ''}`}>
              {task.text}
            </span>
            <Button variant="danger" onClick={() => deleteTask(task.id)}>Delete</Button>
          </li>
        )) : <p className="text-center text-gray-500">No tasks to show.</p>}
      </ul>
    </Card>
  );
};
export default TaskManager;