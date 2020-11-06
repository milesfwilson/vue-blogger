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
}

export const blogService = new BlogService()
