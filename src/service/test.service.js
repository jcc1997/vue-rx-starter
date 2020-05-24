import { from } from 'rxjs'
import { Request } from './request.service'

export class TestService extends Request {
  test (val) {
    console.log('service:' + val)
    return from(
      new Promise(resolve => {
        setTimeout(() => {
          resolve(100)
        }, 1000)
      })
    )
  }
}