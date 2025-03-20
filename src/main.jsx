import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider,Router,Link } from 'react-router-dom'
import About from './About.jsx'
import Home from './Home.jsx'
import Product from './Product.jsx'
import Cart from './Cart.jsx'
import Menu from './Menu.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element:<Home />
  },
  {
    path: "App",
    element:<App />
  },

  {
    path: "About",
    element:<About />
  },


  {
    path: "Product/:id",
    element:<Product />
  },

  {
    path: "Cart",
    element:<Cart />
  },

  {
    path: "Menu",
    element:<Menu />
  },
 
  
 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    

  </StrictMode>,
)
