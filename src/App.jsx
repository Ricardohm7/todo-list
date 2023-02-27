import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';
import { TaskProvider } from './TasksContext';

function App() {
  return (
    <>
      <TaskProvider>
        <h1>Prague itinerary</h1>
        <AddTask />
        <TaskList />
      </TaskProvider>
    </>
  );
}

export default App
