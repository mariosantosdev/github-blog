import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from './styles'

export const DefaultLayout: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  )
}
