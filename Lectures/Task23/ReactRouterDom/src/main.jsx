import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { Dashboard, Home, Login, Signup, Aboutus } from './index'
import { productInfoLoader } from './Components/Home'
import { githubInfoLoader } from './Components/Aboutus'
import Layout from './Layout'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Dashboard />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
      <Route path='aboutus'
        element={<Aboutus />}
        loader={githubInfoLoader} />
      <Route
        path='home'
        element={<Home />}
        loader={productInfoLoader}
      />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <Layout />
    </RouterProvider>
  </StrictMode>
)
