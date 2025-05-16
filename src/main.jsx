import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,HashRouter} from 'react-router-dom'
import Home from './Home'
import About from './About'
import NotFound from './NotFound'
import Gallery from './Gallery'
import Contact from './Contact'
import Services from './Services'




const router =createBrowserRouter([
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
]
);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* RouterProvider */}
    <HashRouter router={router}/>
  </StrictMode>,
)



