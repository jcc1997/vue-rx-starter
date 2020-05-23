import { from } from 'rxjs'
import axios from 'axios'

export class Request {
  get(url, config) {
    return from(axios.get(url, config))
  }

  post(url, data, config) {
    return from(axios.post(url, data, config))
  }
}
