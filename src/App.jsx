import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from './Components/AppLayout'
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Experience } from './Pages/Experience';
import { Skills } from './Pages/Skills';
import { Projects } from './Pages/Projects';
import { Contact, contactData } from './Pages/Contact';
import { ErrorPage } from './Pages/ErrorPage';

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/skills",
          element:<Skills/>,
        },
        {
          path:"/experience",
          element:<Experience/>,
        },
        {
          path:"/projects",
          element:<Projects/>,
        },
        {
          path:"/contact",
          element:<Contact/>,
          action:contactData,
        },
      ]
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
