import { Header } from './components/Header'
import { InputTask } from './components/InputTask'
import { Task } from './components/Task'
import { TaskList } from './components/TaskList'
import './global.css'

function App() {

  return (
    <>
      <Header />
      <InputTask />
      <TaskList />
      <Task />
    </>
  )
}

export default App
