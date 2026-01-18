
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './pages/login/login'
import ProfileUpdate from './pages/profileUpdate/ProfileUpdate'
import Chat from './pages/chat/Chat'

const router = createBrowserRouter([
    {
      path: "/",
      element:<Login/>
  },
  {
    path: "/chat",
    element:<Chat/>
  },
  {
    path: "/profile",
    element:<ProfileUpdate/>
  }

 ])


function App() {
  

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
