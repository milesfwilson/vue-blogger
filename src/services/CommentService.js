import { AppState } from '../AppState'
import { api } from './AxiosService'

class CommentService {
  async getComments(blogId) {
    try {
      const res = await api.get('/blogs/' + blogId + '/comments')
      AppState.comments = res.data
      // eslint-disable-next-line no-console
      console.log(AppState.comments, 'Comments')
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    }
  }

  async createComment(newComment, blogId) {
    try {
      const res = await api.post('/comments/', newComment)
      AppState.comments.push(res.data)
      this.getComments(blogId)
    } catch (error) {
      console.error(error)
    }
  }

  async deleteComment(id, blog) {
    try {
      const res = await api.delete('/comments/' + id)
      this.getComments(blog)
      console.log(res)
    } catch (error) {
      console.error(error)
    }
  }

  async editComment(id, blog, newComment) {
    try {
      const res = await api.put('/comments/' + id, newComment)
      console.log(res)
      this.getComments(blog)
    } catch (error) {
      console.error(error)
    }
  }
}

export const commentService = new CommentService()
