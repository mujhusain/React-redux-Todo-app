import './App.css'
import { Todo } from './components/todo'
import {Routes, Route} from 'react-router-dom'
import {TodoDetail} from './components/todoDetail.jsx'
function App() {

  return (
    <div className="App">
      <Routes >

    <Route path='/' element={<Todo />}></Route>
    <Route path='/todos/:id' element={<TodoDetail />}></Route>
      </Routes>
    </div>
  )
}

export default App
