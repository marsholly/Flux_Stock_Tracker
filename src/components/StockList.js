import React, { Component } from 'react'
import StockStore from '../stores/StockStore';
import StockActions from '../actions/StockActions';
import {Link} from 'react-router';


export default class StockList extends Component {
  constructor(props){
    super(props);

    this._onChange = this._onChange.bind(this);
    this.reFresh = this.reFresh.bind(this);

    this.state = {
      stock:[]
    }
  }

  componentDidMount(){
    let obj = this.props.params;
    let symbol = obj.symbol;
    StockActions.getOneInfo(symbol);
    StockStore.startListening(this._onChange);
  }

  componentWillUnmount(){
    StockStore.stopListening(this._onChange);
  }

  _onChange(){
    this.setState({stock: StockStore.getAll()});
  }

  reFresh(){
    let obj = this.props.params;
    let symbol = obj.symbol;
    StockActions.getOneInfo(symbol);
  }

  render() {
    let stockObj = this.state.stock;
    let stock = stockObj.Data;
    let stockHtml
    if(stock){
      stockHtml = (
        <tr>
          <th>{stock.Name}</th>
          <th>{stock.LastPrice}</th>
          <th>{stock.High}</th>
          <th>{stock.Low}</th>
          <th>{stock.Open}</th>
          <th>{stock.ChangeYTD}</th>
        </tr>
      )
    } else {
      stockHtml = (<tr></tr>)
    }

    return (
      <div>
        <Link to='/'>
          <button className='btn btn-primary'>Home</button>
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Last Price</th>
              <th>High</th>
              <th>Low</th>
              <th>Open</th>
              <th>ChangeYTD</th>
              <th>
                <button className="btn btn-success btn-md"onClick ={this.reFresh}>Refresh</button>
              </th>
            </tr>
          </thead>
            <tbody>
              {stockHtml}
          </tbody>
        </table>
      </div>
    )

  }
}
