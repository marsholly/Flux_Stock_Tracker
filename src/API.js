import axios from 'axios';
import ServerActions from './actions/ServerActions';

const API = {
  getInfos(symbol){
    axios.get(`/api/stocks/lookup/${symbol}`)
      .then(res => res.data)
      .then(ServerActions.receiveCompanys)
      .catch(console.error);
  },
  getOneInfo(symbol){
    axios.get(`/api/stocks/quote/${symbol}`)
      .then(res => res.data)
      .then(ServerActions.receiveStock)
      .catch(console.error);
  }
}

export default API;
