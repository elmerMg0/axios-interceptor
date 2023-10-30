import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { AxiosInterceptor } from './interceptor/axios.interceptor.tsx'
import App from './App.tsx';
//Interceptor funcionando.
AxiosInterceptor();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
