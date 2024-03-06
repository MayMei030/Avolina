import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from '../Home'
import Story from '../Story'



const routes = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/story", element: <Story /> },
])


function App() {
  return (
    <RouterProvider router={routes} />
  )
}

export default App
