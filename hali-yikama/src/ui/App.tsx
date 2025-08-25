import { Link, Outlet, useLocation } from 'react-router-dom'
import { PingTest } from '../ui/components/PingTest'

export function App() {
  const location = useLocation()
  return (
    <div className="layout">
      <aside className="sidebar">
        <h1>Halı Yıkama</h1>
        <nav>
          <Link to="/orders" className={location.pathname.startsWith('/orders') || location.pathname === '/' ? 'active' : ''}>Siparişler</Link>
          <Link to="/customers" className={location.pathname.startsWith('/customers') ? 'active' : ''}>Müşteriler</Link>
          <Link to="/pricing" className={location.pathname.startsWith('/pricing') ? 'active' : ''}>Fiyat Listesi</Link>
          <Link to="/scheduling" className={location.pathname.startsWith('/scheduling') ? 'active' : ''}>Planlama</Link>
          <Link to="/reports" className={location.pathname.startsWith('/reports') ? 'active' : ''}>Raporlar</Link>
        </nav>
      </aside>
      <main className="content">
        <div className="toolbar"><PingTest /></div>
        <Outlet />
      </main>
    </div>
  )
}

