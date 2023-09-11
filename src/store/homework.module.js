import axios from 'axios'

export const namespaced = true

export const state = {
  table_data: [{
    id: 1,
    text: "Hello world",
    url: "https://www.google.com",
  },
  {
    id: 2,
    text: "iphone",
    url: "https://www.apple.com/tw/",
  },
  {
    id: 3,
    text: "andriod",
    url: "https://www.android.com/intl/zh-TW_tw/"
  }],
  showData: []
}

export const getters = {}

const mutations = {
  setShowData(state,newData) {
    state.showData = newData;
  }
}

const actions = {
  async getShowData({commit}) {

      return new Promise((resolve, reject) => {
        // axios
        axios.get('https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6')
          .then(res => {
            const data = res.data;
            commit('setShowData',data)
            resolve(res);
          })
  
          .catch(err => {
            reject(err);
          })
      })
  
  }
}


export default {
  namespaced,
  state,
  actions,
  mutations,
  getters,
}
