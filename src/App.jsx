import './App.css'
import ToDoItem from './Components/ToDoItem'

function App() {


  return (
    <div className='display'>
      <div className='displayToDo'>
      <div className='heading'>To-Do-App</div>
        <ToDoItem />
        {/* <ToDoList /> */}
      </div>
    </div>
  )
}

export default App
