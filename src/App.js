import { useState } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Eat a sandwich',
        day: 'Friday 13th at 3:00pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Slay Diablo',
        day: 'Wednesday 6th at 6:00pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Go to russian store',
        day: 'Friday 4th at 5:00pm',
        reminder: false
    }
])

//Add Task
const addTask = (task) => {
  console.log(task);
  //set random id since we don't have a backend
  const id = Math.floor(Math.random() * 10000) + 1;
  const newTask = { id, ...task}
  setTasks([...tasks, newTask])
}

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder
const toggleReminder = (id) => {
  console.log(id)
  setTasks(tasks.map((task) => 
    task.id === id ? { ...task, reminder: !task.reminder} : task))
}

return (
    <div className="App">
      <Header showTaskForm={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask}/>
      {showAddTask && <TaskForm onAdd={addTask}/>}
      {tasks.length > 0 ? 
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> 
      : 'No Active Tasks'}
      
    </div>
  );
}

export default App;
