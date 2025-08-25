import { useEffect, useState } from 'react'

export function PingTest() {
  const [message, setMessage] = useState<string>('')
  useEffect(() => {
    if (window.api?.ping) {
      window.api.ping().then(setMessage)
    }
  }, [])
  return <span style={{opacity: 0.6}}>IPC: {message || '...'}</span>
}

