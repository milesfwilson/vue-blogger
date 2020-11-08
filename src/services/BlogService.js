import { AppState } from '../AppState'
import { api } from './AxiosService'
import router from '../router'

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

  async getMyBlogs() {
    try {
      const res = await api.get('/profile/blogs')
      AppState.myBlogs = res.data
      console.log('got blogs!', AppState.myBlogs)
    } catch (error) {
      console.error(error)
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
      router.push({ name: 'Home' })
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }

  async deleteBlog(blogId) {
    try {
      const res = await api.delete('/blogs/' + blogId)
      router.push({ name: 'Home' })

      // eslint-disable-next-line no-console
      console.log(res)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }

  async editBlog(blogId, newBlog) {
    try {
      const res = await api.put('/blogs/' + blogId, newBlog)
      this.getActiveBlog(blogId)
      console.log(res.data.data)
    } catch (error) {
      console.error(error)
    }
  }
}

export const blogService = new BlogService()
