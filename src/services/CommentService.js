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
    } catch (error) {
      console.error(error)
    }
  }
}

export const commentService = new CommentService()
