import { Outlet } from 'react-router-dom'

import { LayoutContainer } from './styles'
import { Header } from '../../components/Header'
import { Toaster } from 'sonner'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
      <Toaster richColors />
    </LayoutContainer>
  )
}
