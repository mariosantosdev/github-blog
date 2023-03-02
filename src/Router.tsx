import React from 'react'
import { Route, Routes } from 'react-router'
import { DefaultLayout } from '~/layouts/DefaultLayout'
import { BlogPage } from '~/pages/Blog'

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<BlogPage />} />
      </Route>
    </Routes>
  )
}
