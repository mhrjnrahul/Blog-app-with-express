import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Blogs from './pages/Blogs'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // layout
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'blogs',
        element: <Blogs />
      }
    ]
  }
])

export default router
