
class Api {
  constructor () {
    this.topicList = [
      {topicId: 1, title: 'Ivan'},
      {topicId: 2, title: 'Java EE'},
      {topicId: 3, title: 'Programing'}
    ]
    this.fetchTopics = this.fetchTopics.bind(this)
  }

  async fetchTopics () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.topicList)
      }, 2000)
    })
  }

  async postTopic ({title}) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let topicId = this.topicList.length + 1
        let topic = {
          topicId,
          title
        }
        this.topicList.push(topic)
        resolve(topic)
      }, 2000)
    })
  }
}

export default new Api()
