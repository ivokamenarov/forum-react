import axios from 'axios'

class Api {
  constructor () {
    this.instance = axios.create({
      baseURL: process.env.REACT_APP_API_URL
    })
    this.instance.defaults.headers.post['Content-Type'] = 'application/json'
    this.fetchTopics = this.fetchTopics.bind(this)
  }

  async fetchTopics () {
    let res = await this.instance.get('/topics/')
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(res), 2000)
    })
    // return res
  }

  async postTopic (topic) {
    let res = await this.instance.post('/topics/', topic)
    return res
  }

  async fetchTopicById (topicId) {
    let res = await this.instance.get(`/topics/id/${topicId}/`)
    return res
  }
}

export default new Api()
