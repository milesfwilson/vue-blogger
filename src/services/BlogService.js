import { AppState } from '../AppState'
import { api } from './AxiosService'

class BlogService {
  async getAllBlogs() {
    try {
      const res = await api.get('/blogs')
      AppState.blogs = res.data

      // eslint-disable-next-line no-console
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    }
  }

  async getActiveBlog(blogId) {
    try {
      const res = await api.get('/blogs/' + blogId)
      AppState.activeBlog = res.data
      // eslint-disable-next-line no-console
      console.log(AppState.activeBlog)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }

  async createBlog(newBlog) {
    try {
      const res = await api.post('/blogs/', newBlog)
      console.log(res.data)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }

  async deleteBlog(blogId) {
    try {
      const res = await api.delete('/' + blogId)

      // eslint-disable-next-line no-console
      console.log(res)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }
}

export const blogService = new BlogService()
