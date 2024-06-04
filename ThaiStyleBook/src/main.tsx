import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import Thaibook from './components/Thaibook.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Thaibook />
  </React.StrictMode>,
)
