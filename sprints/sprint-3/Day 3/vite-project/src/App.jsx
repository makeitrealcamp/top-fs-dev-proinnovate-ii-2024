import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTaskForm } from './components/CreateTaskForm'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <CreateTaskForm   />
</div>
    )
}

export default App
