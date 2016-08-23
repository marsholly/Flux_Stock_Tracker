import AppDispatcher from '../AppDispatcher';

const ServerActions ={
  receiveCompanys(companyArr){
    AppDispatcher.dispatch({
      type: 'RECEIVE_All_COMPANIES',
      companyArr
    })
  },
  receiveStock(stockObj){
    AppDispatcher.dispatch({
      type: 'RECEIVE_STOCK',
      stockObj
    })
  }
}

export default ServerActions;
