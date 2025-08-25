import { useMemo, useState } from 'react'

type ReportRow = { id: number; customer: string; total: number; date: string }

export function ReportsPage() {
  const [rows] = useState<ReportRow[]>([
    { id: 1, customer: 'Ahmet Yılmaz', total: 480, date: new Date().toISOString() },
    { id: 2, customer: 'Ayşe Demir', total: 210, date: new Date().toISOString() }
  ])
  const sum = useMemo(() => rows.reduce((s, r) => s + r.total, 0), [rows])

  return (
    <div>
      <div className="toolbar">
        <button className="button">Bugün</button>
        <button className="button">Bu Hafta</button>
        <button className="button">Bu Ay</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Tarih</th>
            <th>Müşteri</th>
            <th>Tutar</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(r => (
            <tr key={r.id}>
              <td>{new Date(r.date).toLocaleString('tr-TR')}</td>
              <td>{r.customer}</td>
              <td>{r.total.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}</td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td style={{ fontWeight: 600 }}>Toplam</td>
            <td style={{ fontWeight: 600 }}>
              {sum.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

