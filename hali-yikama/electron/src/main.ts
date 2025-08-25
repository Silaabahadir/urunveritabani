import { app, BrowserWindow, ipcMain } from 'electron'
import path from 'node:path'
import url from 'node:url'

let mainWindow: BrowserWindow | null = null

const isDev = !app.isPackaged

async function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true
    }
  })

  if (isDev) {
    await mainWindow.loadURL('http://localhost:5173')
    mainWindow.webContents.openDevTools({ mode: 'detach' })
  } else {
    const indexHtml = url.pathToFileURL(path.join(process.cwd(), 'dist', 'index.html')).toString()
    await mainWindow.loadURL(indexHtml)
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

ipcMain.handle('ping', async () => {
  return 'pong'
})

