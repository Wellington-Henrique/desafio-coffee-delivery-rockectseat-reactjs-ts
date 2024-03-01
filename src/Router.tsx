import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { Order } from './pages/Order'
import { OrderCompleted } from './pages/OrderCompleted'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/completed" element={<OrderCompleted />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
