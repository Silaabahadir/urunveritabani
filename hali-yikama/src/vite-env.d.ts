/// <reference types="vite/client" />

declare interface Window {
  api: {
    ping: () => Promise<string>
  }
}

