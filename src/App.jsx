import Navbar from "./components/Navbar"


function App() {


  return (
    <>
      <Navbar />
      <div className="container bg-red-300 mx-auto my-5 rounded-xl p-5 min-h-[80vh]">
        <div className="addTodo">
          <h2 className="text-lg text-red-900">Add a Todo</h2>
          <input type="text" />
          <button className="bg-red-400 hover:bg-red-500 mx-6 rounded-lg p-3 py-1 text-sm font-bold text-white">Add</button>
        </div>
        <h2 className="text-red-900 font-bold text-lg">Your ToDo's</h2>
        <div className="todos">
          <div className="todo flex">
            <div className="text">Lorem ipsum, dolor sit amet consectetur</div>
            <div className="buttons">
              <button className="bg-red-400 hover:bg-red-500 mx-2 rounded-lg p-3 py-1 text-sm font-bold text-white">Edit</button>
              <button className="bg-red-400 hover:bg-red-500 mx-2 rounded-lg p-3 py-1 text-sm font-bold text-white">Delete</button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
