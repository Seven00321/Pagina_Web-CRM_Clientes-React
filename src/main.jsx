import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Libreria de REACT-ROUDER-DOM
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Componentes
import Layout from './components/layout'

// Pages
import NuevoCliente, {action as nuevoClienteAction} from './pages/NuevoCliente'
import Index, {loader as clientesLoader} from './pages/index'

// Funciones


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Index/>,
                loader: clientesLoader
            },
            {
                path: '/clientes/nuevo',
                element: <NuevoCliente/>,
                action: nuevoClienteAction
            }
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router = {router}/>
    </React.StrictMode>
)
