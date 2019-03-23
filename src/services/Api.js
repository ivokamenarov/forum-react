import axios from 'axios'

class Api {
  constructor () {
    this.instance = axios.create({
      baseURL: 'http://localhost:8090'
    })

    // this.topicList = [
    //   {id: 1, title: 'Ivan'},
    //   {id: 2, title: 'Java EE'},
    //   {id: 3, title: 'Programing'}
    // ]
  }

  async fetchTopics () {
    let res = await this.instance.get('/topics/')
    return res
  }

  async postTopic ({title}) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let id = this.topicList.length + 1
        let topic = {
          id,
          title
        }
        this.topicList.push(topic)
        resolve(topic)
      }, 2000)
    })
  }
}

export default new Api()
