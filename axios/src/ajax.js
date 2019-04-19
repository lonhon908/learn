import axios from 'axios';
import session from './session';

const host = 'https://z-stg1.pa18.com';

const ajax = async () => {
  try {
    const sessions = await session;
    /* const axios = axios.create({
      baseURL: host,
      headers: {
        'X-HRX-SESSION': sessions
      }
    }) */
    // 或者用下面的也可以
    axios.defaults.baseURL = host;
    axios.defaults.headers['X-HRX-SESSION'] = session;
    return axios;
  } catch (error) {
    Promise.reject(error)
  }
}

export const post = (url, data = {}) => new Promise((resolve, reject) => {
  ajax().then(axios => {
    // axios.post(url, data)
    // 也可以传对象，如下：
    axios({
      method: 'post',
      url,
      data,
      /* headers: {
        "Accept": "application/json;charset=utf-8",
        'Content-Type': 'application/json'
      } */
    })
      .then(res => {
        if (res.status === 200) {
          resolve(res.data)
        } else {
          reject('网路异常')
        }
      })
      .catch(err => {
        reject(err)
      })
  }).catch(err => {
    reject(err);
  })
})

export const get = (url, data = {}) => new Promise((resolve, reject) => {
  ajax().then(axios => {
    axios.get(url, {
      params: data
    }).then(res => {
      if (res.status === 200) {
        resolve(res.data)
      } else {
        reject('网路异常')
      }
    }).catch(err => {
      reject(err);
    })
  }).catch(err => {
    reject(err);
  })
})

export const get2 = (url, data = {}) => new Promise((resolve, reject) => {
  ajax().then(axios => {
    axios({
      method: 'get',
      url,
      params: data,
      /* headers: {
        "Accept": "application/json;charset=utf-8",
        'Content-Type': 'application/json'
      } */
    }).then(res => {
      if (res.status === 200) {
        resolve(res.data)
      } else {
        reject('网路异常')
      }
    }).catch(err => {
      reject(err);
    })
  }).catch(err => {
    reject(err);
  })
})