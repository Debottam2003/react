import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Map from './Map.jsx'
import New from './New.jsx'

createRoot(document.getElementById('root')).render(
  //<StrictMode>
    //<App />
  //</StrictMode>, 
  // <Map />
  <New />
)
