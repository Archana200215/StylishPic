import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createHashRouter,RouterProvider} from 'react-router-dom'
import Home from './Home'
import About from './About'
import NotFound from './NotFound'
import Gallery from './Gallery'
import Contact from './Contact'
import Services from './Services'


// createBrowserRouter

const router =createHashRouter([
  {
    path:'/',
    element:<Home />,
    errorElement:<NotFound />
  },
  
  {
    path:'/About',
    element:<About/>
  },
  {
    path:'/Gallery',
    element:<Gallery/>
  },
  {
    path:'/Services',
    element:<Services/>
  },
  {
    path:'/Contact',
    element:<Contact/>
  }
],
{
basename: '/StylishPic'
}
);

 



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)



