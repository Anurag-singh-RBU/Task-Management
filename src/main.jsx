import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Auth from './context/Auth.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>

    <Auth>
      <App/>
    </Auth>

  </StrictMode>,

)
