import { useEffect, useState } from 'react'

type PriceItem = { id: number; name: string; unit: string; price: number }

export function PricingPage() {
  const [items, setItems] = useState<PriceItem[]>([])

  useEffect(() => {
    setItems([
      { id: 1, name: 'Halı', unit: 'm²', price: 40 },
      { id: 2, name: 'Yolluk', unit: 'm²', price: 35 },
      { id: 3, name: 'Battaniye', unit: 'adet', price: 120 }
    ])
  }, [])

  return (
    <div>
      <div className="toolbar">
        <button className="button primary">Yeni Ürün</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Ürün</th>
            <th>Birim</th>
            <th>Birim Fiyat</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map(i => (
            <tr key={i.id}>
              <td>{i.name}</td>
              <td>{i.unit}</td>
              <td>{i.price.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}</td>
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

