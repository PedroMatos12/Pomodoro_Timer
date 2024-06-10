import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PageBase } from './pages/PageBase/pageBase'
import { Home } from './pages/Home/home'
import { History } from './pages/History/history'

export function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageBase />}>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
