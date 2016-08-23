import API from '../API';


const StockActions = {
  getInfos(symbol){
    API.getInfos(symbol)
  },
  getOneInfo(symbol){
    API.getOneInfo(symbol)
  }
}

export default StockActions;
