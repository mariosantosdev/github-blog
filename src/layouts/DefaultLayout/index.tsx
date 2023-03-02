import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '~/components/Footer'

import { Header } from './styles'

export const DefaultLayout: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  )
}
