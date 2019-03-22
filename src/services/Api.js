
class Api {
  constructor () {
    this.topicList = [
      {id: 1, title: 'Ivan'},
      {id: 2, title: 'Java EE'},
      {id: 3, title: 'Programing'}
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
