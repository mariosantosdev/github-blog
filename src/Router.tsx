import React from 'react'
import { Route, Routes } from 'react-router'
import { DefaultLayout } from '~/layouts/DefaultLayout'
import { BlogPage } from '~/pages/Blog'
import { PostPage } from '~/pages/Post'

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<BlogPage />} />
        <Route path="/post/:postId" element={<PostPage />} />
      </Route>
    </Routes>
  )
}
