import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher'

let stock = [];

class StockStore extends EventEmitter{
  constructor(){
    super();

    AppDispatcher.register(action =>{
      switch (action.type) {
        case 'RECEIVE_STOCK':
          stock = action.stockObj;
          this.emit('CHANGE');
          break;

      }
    });
  }

  startListening(cb){
    this.on('CHANGE', cb);
  }

  stopListening(cb){
    this.removeListener('CHANGE',cb);
  }

  getAll(){
    return stock;
  }
}

export default new StockStore();
