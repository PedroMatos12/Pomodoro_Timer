import { CyclesContextProvider } from './contexts/CyclesContexts'
import { AppRoutes } from './routes'

function App() {
  return (
    <>
      <CyclesContextProvider>
        <AppRoutes />
      </CyclesContextProvider>
    </>
  )
}

export default App
