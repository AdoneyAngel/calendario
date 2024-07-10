import { RouterProvider } from 'react-router-dom'
import './App.css'
import { Router } from './model/Router'

function App() {

  const router = Router.getRouter()

  return (
    <div id="app">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
