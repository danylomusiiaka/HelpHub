import './App.css'
import './index.css'
import { useEffect, useState } from 'react'
import Axios from 'axios'

function App() {
  const [test, setTest] = useState("")
  const [message, setMessage] = useState("")

  useEffect(() => {
    Axios.get("http://localhost:3001/addtest").then((response) => {
      setTest(response.data.test.test_value)
    })
  }, [])

  const addTest = async () => {
    Axios.post("http://localhost:3001/addtest", {
      test_value: test
    }).then(() => {
      setMessage(`${test} добавлено в базу даних projectdb`); 
      setTest("");
    })
  }

  const handleChange = (e: any) => {
    setTest(e.target.value);
  }

  return (
    <>
      <div>
        <h1>DB test for C--</h1>
      </div>
      <div>
        <input type="text" value={test} onChange={handleChange} />
        <button onClick={addTest}>Add</button>
        <h4>{message}</h4> 
      </div>
    </>
  )
}

export default App;
