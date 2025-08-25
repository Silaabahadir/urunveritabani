import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('api', {
  ping: () => ipcRenderer.invoke('ping')
})

declare global {
  interface Window {
    api: {
      ping: () => Promise<string>
    }
  }
}

