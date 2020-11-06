// import { AppState } from '../AppState'
import { api } from './AxiosService'

class CommentService {
  // async getAllComments() {
  //   try {
  //     const res = await api.get('/comments')
  //     // AppState.blogs = res.data

  //     // eslint-disable-next-line no-console
  //     console.log(res)
  //   } catch (err) {
  //     // eslint-disable-next-line no-console
  //     console.error(err)
  //   }
  // }
}

export const commentService = new CommentService()
