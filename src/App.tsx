import ToDoInput from './components/ToDoInput'
import ToDoList from './components/ToDoList' 
import './App.css'

function App() {

  return (
    <>
      <div style={{ padding: '20px' }}>
      <h1>Redux To-Do List</h1>
      <ToDoInput />
      <ToDoList />
    </div>
    </>
  )
}

export default App
