import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Libreria de REACT-ROUDER-DOM
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Componentes
import Layout from './components/layout'
import ErrorPage from './components/ErrorPage'
import { action as eliminarClienteAction} from './components/cliente'

// Pages
import NuevoCliente, {action as nuevoClienteAction} from './pages/NuevoCliente'
import Index, {loader as clientesLoader} from './pages/Index'
import EditarClientes, {loader as editarClientesLoader, action as editarClienteAction} from './pages/EditarClientes'

// Funciones
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Index/>,
                loader: clientesLoader,
                errorElement: <ErrorPage/>
            },
            {
                path: '/clientes/nuevo',
                element: <NuevoCliente/>,
                action: nuevoClienteAction,
                errorElement: <ErrorPage/>
            },
            {
                path: '/clientes/:clienteId/editar',
                element: <EditarClientes/>,
                loader: editarClientesLoader,
                action: editarClienteAction,
                errorElement: <ErrorPage/>
            },
            {
                path: '/clientes/:clienteId/eliminar',
                action: eliminarClienteAction
            }
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router = {router}/>
    </React.StrictMode>
)
