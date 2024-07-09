import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {

  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);
  const handledit=() => {};

  const handledelete =()=> {};

  const handleadd =()=> {
settodos([...todos ,{todo , iscomplited :false }])
     settodo("")

  };

  const handlechange= (e)=>{
 settodo(e.target.value)
  }
     
  return (
    <>
      <Navbar />
      <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh] md:w-[35%]">
        <h1 className="font-bold text-center text-3xl">
          iTask - Manage your todos at one place
        </h1>
        <div className="addTodo my-5 flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Add a Todo</h2>
          <div className="flex">
            <input onChange={handlechange} value={todo} type="text" className="w-full rounded-full px-5 py-1" />
            <button
              onClick={handleadd}
              className="bg-violet-800 mx-2 rounded-full hover:bg-violet-950 disabled:bg-violet-500 p-4 py-2 text-sm font-bold text-white"
            >
              Save
            </button>
          </div>
        </div>
        <input className="my-4" id="show" type="checkbox" />
        <label className="mx-2">Show Finished</label>
        <div className="h-[1px] bg-black opacity-15 w-[90%] mx-auto my-2"></div>
        <h2 className="text-2xl font-bold">Your Todos</h2>
        <div className="todos">
          {todos.map(item =>{

           })}
          <div className="flex gap-5">
            <input type="checkbox" id="" />
          </div>
          <div className="buttons flex h-full">
            <div className="text">todo</div>
            <button
              onClick={handledit}
              className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"
            >
              Edit
            </button>
            <button
              onClick={handledelete}
              className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"
            >
              Delete
            </button>
          </div>
        </div> 
      
      </div>
    
    </>
  );
}

export default App;
