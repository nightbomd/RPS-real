import { useState } from 'react'
import './App.css'

function Button({ text, onClick, className = "", type = "button", disabled = false }) {
  return (
    <button
      type={type}
      className={`btn ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

function App() {
  const [name, setName] = useState("")
  const [mode, setMode] = useState("start")

  function enterName() {
    setMode("mode");
  }
  function playGame() {
    setMode("play");
  }
  return (
    <>
    <div className={mode === "play" ? "play-gradient" : ""}>
      {mode === "start" && (
        <>
          <h1 className="mb-5">Rock Paper Scissors!</h1>

          <div className="container text-center">
            <div className="d-flex align-items-center gap-2 mb-3">
              <input
                className="form-control p-3 rounded shadow-sm"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <Button
                text="Enter"
                className="p-3 enter shadow btn btn-success"
              />
            </div>

            <Button
              text="Play"
              className="p-3 shadow btn play w-100"
              onClick={enterName}
              disabled={!name}
            />
          </div>
        </>
      )}

      {mode === "mode" && (
        <>
          <h1 className="mb-5">Choose a Mode!</h1>

          <div className="container text-center w-100">
            <div className="d-flex align-items-center justify-content-center gap-2 mb-3 w-100">
              <Button text="Best of 1" className="p-3 shadow btn btn-success" />
              <Button text="Best of 3" className="p-3 shadow btn btn-success" />
              <Button text="Best of 5" className="p-3 shadow btn btn-success" />
            </div>
            <Button 
              text="Play"
              className="p-3 shadow btn play w-100"
              onClick={playGame}
            />
          </div>
        </>
      )}
      {mode === "play" && (
        <>
          <h1 className="mb-5 text-white">Round one</h1>
          <div className="game">
            <div className="bart">
              <h2>❤️❤️❤️</h2>
              <img src="/Images/Homer.png" alt="Homer" />


              <p>{name}</p>
            </div>
          </div>
        </>
      )}
      </div>
    </>
  )

}

export { Button }
export default App
