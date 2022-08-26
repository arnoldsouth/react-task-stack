import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import About from '../About/About';
import AddTask from '../AddTask/AddTask';
import { Header } from '../Header/Header';
import { Tasks } from '../Tasks/Tasks';

// import styles from './TaskStack.scss';

// export interface TaskStackProps {
//   prop?: string;
// }

export const TaskStack = () => {
  const [showAddTask, setShowAddTask] = useState(true);

  const [tasks, setTasks] = useState([
    {
      id: '1',
      text: 'Walk Touka tonight and over the weekend',
      day: '8/25/2022',
      reminder: 'true',
    },
    {
      id: '2',
      text: 'Nap the rest of the day',
      day: '8/25/2022',
      reminder: 'true',
    },
    {
      id: '3',
      text: 'Do laundry and fold clothes',
      day: '9/1/2022',
      reminder: 'true',
    },
  ]);

  // Add Task
  // Create our own id since we're not connecting to backend right now
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;

    // Creates newTask variable with the id we created, and then add on the new task inputted values
    const newTask = { id, ...task };

    // Brings in the tasks we currently have and then add on the newTask we just created
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {showAddTask && <AddTask onAdd={addTask} />}
              {/* Conditional to show if there is more than 0 tasks, show the tasks, and if not more than 0, show the message 'No tasks remaining' */}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                'No tasks remaining!'
              )}
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};
