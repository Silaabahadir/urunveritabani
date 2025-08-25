import { useEffect, useMemo, useState } from 'react'

type OrderItem = {
  id: number
  product: string
  quantity: number
  unitPrice: number
}

type Order = {
  id: number
  customerName: string
  status: 'Yeni' | 'Toplandı' | 'Yıkanıyor' | 'Teslim Edildi'
  createdAt: string
  items: OrderItem[]
}

export function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    setOrders([
      {
        id: 101,
        customerName: 'Ahmet Yılmaz',
        status: 'Yeni',
        createdAt: new Date().toISOString(),
        items: [
          { id: 1, product: 'Halı (m²)', quantity: 12, unitPrice: 40 }
        ]
      },
      {
        id: 102,
        customerName: 'Ayşe Demir',
        status: 'Toplandı',
        createdAt: new Date().toISOString(),
        items: [
          { id: 1, product: 'Yolluk (m²)', quantity: 6, unitPrice: 35 }
        ]
      }
    ])
  }, [])

  const filtered = useMemo(() => {
    const q = query.toLowerCase()
    return orders.filter(o =>
      o.customerName.toLowerCase().includes(q) || String(o.id).includes(query)
    )
  }, [orders, query])

  const total = (o: Order) => o.items.reduce((s, i) => s + i.quantity * i.unitPrice, 0)

  return (
    <div>
      <div className="toolbar">
        <input className="input" placeholder="Ara (isim, sipariş no)" value={query} onChange={e => setQuery(e.target.value)} />
        <button className="button primary">Yeni Sipariş</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Müşteri</th>
            <th>Durum</th>
            <th>Tarih</th>
            <th>Tutar</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(o => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.customerName}</td>
              <td>{o.status}</td>
              <td>{new Date(o.createdAt).toLocaleString('tr-TR')}</td>
              <td>{total(o).toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}</td>
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

