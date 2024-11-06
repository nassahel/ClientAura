import { Route, Routes } from 'react-router-dom'
import './App.css'
import Cuestionary from './Pages/Cuestionary'
import { ResponsesProvider } from './Context/ResponsesContext'


function App() {

  return (
    <div>
      <ResponsesProvider>
        <Routes>
          <Route path='/' element={<Cuestionary />} />
        </Routes>
      </ResponsesProvider>
    </div>
  )
}

export default App
