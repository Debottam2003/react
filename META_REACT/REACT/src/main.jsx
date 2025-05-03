import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Form, RouterProvider } from 'react-router-dom';
import About from './About.jsx';
import Contact from './Contact.jsx';
import FormFill from './Form.jsx';
import Todo from './Todo.jsx';

const router = createBrowserRouter([
  {path: '/', element: <App />, children: [
    {path: '', element: <App />},
    {path: '/about', element: <About />},
    {path: '/contact', element: <Contact />},
  ]},
  // {path: '/contact', element: <Contact />},
  {path: '/form', element: <FormFill />}
]);


createRoot(document.getElementById('root')).render(
     
  //  <RouterProvider router= {router}></RouterProvider>
  <Todo />

)
