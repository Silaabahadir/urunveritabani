import { useEffect, useMemo, useState } from 'react'

type Customer = {
  id: number
  name: string
  phone: string
  address: string
}

export function CustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    // placeholder data before DB wired
    setCustomers([
      { id: 1, name: 'Ahmet Yılmaz', phone: '0505 000 0001', address: 'Kadıköy, İstanbul' },
      { id: 2, name: 'Ayşe Demir', phone: '0505 000 0002', address: 'Çankaya, Ankara' }
    ])
  }, [])

  const filtered = useMemo(() => {
    const q = query.toLowerCase()
    return customers.filter(c =>
      c.name.toLowerCase().includes(q) || c.phone.includes(query) || c.address.toLowerCase().includes(q)
    )
  }, [customers, query])

  return (
    <div>
      <div className="toolbar">
        <input className="input" placeholder="Ara (isim, telefon, adres)" value={query} onChange={e => setQuery(e.target.value)} />
        <button className="button primary">Yeni Müşteri</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>İsim</th>
            <th>Telefon</th>
            <th>Adres</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(c => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.phone}</td>
              <td>{c.address}</td>
              <td style={{textAlign:'right'}}>
                <button className="button">Düzenle</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

