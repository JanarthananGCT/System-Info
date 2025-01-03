import { ThemeProvider } from "./components/theme-provider"
import { ModeToggle } from "./components/mode-toggle"
import { Battery } from "./components/Battery"
import { Storage } from "./components/storage"
import { RAM } from "./components/RAM"
import { Bluetooth } from "./components/Bluetooth"
import "./index.css"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground">
        <header className="container mx-auto py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">System Info</h1>
            {/* <ModeToggle /> */}
          </div>
        </header>
        <main className="container mx-auto py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Battery />
            <Storage />
            <RAM />
            <Bluetooth />
          </div>
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
