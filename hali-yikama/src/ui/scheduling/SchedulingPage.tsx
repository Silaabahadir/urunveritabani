import { useEffect, useState } from 'react'

type Task = { id: number; date: string; type: 'Alım' | 'Teslim'; customer: string; address: string }

export function SchedulingPage() {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    const today = new Date()
    const d = today.toISOString().slice(0, 10)
    setTasks([
      { id: 1, date: d, type: 'Alım', customer: 'Ahmet Yılmaz', address: 'Kadıköy, İstanbul' },
      { id: 2, date: d, type: 'Teslim', customer: 'Ayşe Demir', address: 'Çankaya, Ankara' }
    ])
  }, [])

  return (
    <div className="grid cols-2">
      <div className="card">
        <div className="toolbar">
          <button className="button primary">Yeni Görev</button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Tarih</th>
              <th>Tür</th>
              <th>Müşteri</th>
              <th>Adres</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(t => (
              <tr key={t.id}>
                <td>{new Date(t.date).toLocaleDateString('tr-TR')}</td>
                <td>{t.type}</td>
                <td>{t.customer}</td>
                <td>{t.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="card">
        <h3>Takvim (örnek)</h3>
        <p>Takvim entegrasyonu daha sonra eklenecek.</p>
      </div>
    </div>
  )
}

