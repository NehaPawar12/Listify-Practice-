import { useState } from "react"
import Navbar from "./components/Navbar"


function App() {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleAdd = () => {
    setTodos([...todos, {todo, isCompleted: false}])
    setTodo("")
  }

  const handleDelete = () => {

  }

  const handleEdit = () => {

  }


  return (
    <>
      <Navbar />
      <div className="container bg-red-300 mx-auto my-5 rounded-xl p-5 min-h-[80vh]">
        <div className="addTodo">
          <h2 className="text-lg text-red-900 my-5">Add a Todo</h2>
          <input onChange={handleChange} value={todo} type="text" className="rounded-md p-1 m-2 text-red-400 focus:outline-red-500 w-1/2" placeholder="Add your to do here 💫"/>
          <button onClick={handleAdd} className="bg-red-400 hover:bg-red-500 mx-6 rounded-lg p-3 py-1 text-sm font-bold text-white">Add</button>
        </div>
        <h2 className="text-red-900 font-bold text-lg py-5">Your ToDo's</h2>
        <div className="todos">
          {todos.map(item=>{

          
          return <div className="todo flex w-full justify-between py-2">
            <input type="checkbox" value={todo.isCompleted} />
            <div className="text">{item.todo}</div>
            <div className="buttons">
              <button onClick={handleEdit} className="bg-red-400 hover:bg-red-500 mx-5 rounded-lg p-3 py-1 text-sm font-bold text-white">Edit</button>
              <button onClick={handleDelete} className="bg-red-400 hover:bg-red-500 mx-2 rounded-lg p-3 py-1 text-sm font-bold text-white">Delete</button>
            </div>

          </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
