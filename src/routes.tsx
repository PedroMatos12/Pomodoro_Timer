import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PageBase } from './pages/PageBase/pageBase'
import { Home } from './pages/Home/home'
import { History } from './pages/History/history'
import { NotFound } from './pages/NotFound/notFound'

export function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageBase />}>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
