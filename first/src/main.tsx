import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store.tsx'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>

 <BrowserRouter>
    <StrictMode>

      <App />
    </StrictMode>
    
 </BrowserRouter>
  </Provider>
)
