import './App.css'
import Counter from "./components/Counter";
   // 👈 import the component

function App() {
  return (
    <>
      <h1 className='text-center mt-5'>Counter App</h1>
      <div className="d-flex justify-content-center mt-4">
        <Counter />  
      </div>
    </>
  )
}

export default App
