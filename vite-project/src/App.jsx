/* import { useState } from 'react' */
import './App.css'

function Button({ text, onClick, className = "", type = "button" }) {
  return (
    <button
      type={type}
      className={`btn ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

function App() {
  /* const [name, setName] =  useState("")
  const [username, setUsername] = useState("")

  function enterName () {

  } */
  return (
    <>
    <h1 className = "mb-5">Rock Paper Scissors!</h1>
      <div className = "container text-center">
        
        <div className = "d-flex align-items-center gap-2 mb-3">
          <input className = "form-control p-3 rounded shadow-sm" type="text" placeholder="Name"></input>
          <Button 
            text ="Enter"
            className = "p-3 enter shadow btn btn-success "
          />
        </div>
        <Button 
            text ="Play"
            className = "p-3  shadow btn play w-100"
          />
      </div>
    </>
  )
}

export { Button }
export default App