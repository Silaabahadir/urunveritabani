import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <OrdersPage /> },
      { path: '/customers', element: <CustomersPage /> },
      { path: '/orders', element: <OrdersPage /> },
      { path: '/pricing', element: <PricingPage /> },
      { path: '/scheduling', element: <SchedulingPage /> },
      { path: '/reports', element: <ReportsPage /> }
    ]
  }
])

 ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
     <RouterProvider router={router} />
   </React.StrictMode>
 )