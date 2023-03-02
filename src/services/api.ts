import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.github.com',

  headers: {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
  },
})
