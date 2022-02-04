import Header from './components/Header';
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {

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

// Delete Task
const deleteTask = (id) => {
   console.log('delete', id);
}

return (
    <div className="App">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
