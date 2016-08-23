import React, {Component} from 'react';
import StockStore from '../stores/StockStore';
import StockActions from '../actions/StockActions';
import StockList from './StockList';
import {Link} from 'react-router';

export default class ListCompany extends Component{
  constructor(){
    super();

    this._onChange = this._onChange.bind(this);
    // this.setSymbol = this.setSymbol.bind(this);
    this.state={
      symbol:'',
      stock: []
      // currentSymbol: ''
    }
  }

  componentDidMount(){
    StockStore.startListening(this._onChange);
  }

  componentWillUnmount(){
    StockStore.stopListening(this._onChange);
  }

  _onChange(){
    this.setState({stock: StockStore.getAll()})
  }

  // setSymbol(){
  //   console.log('this.state.symbol:', this.props.symbol)
  //   this.setState({currentSymbol: this.state.symbol})
  // }

  render(){
    let stockData = this.state.stock;
    let {Name, Symbol, Exchange} = this.props;
    let url = 'quote/' + this.props.Symbol;
    return (
        <tr>
          <td>{Name}</td>
          <td>{Symbol}</td>
          <td>{Exchange}</td>
          <td>
            <Link to={url}>
              <button className="btn btn-success btn-xs" >
                <span className="glyphicon glyphicon-list-alt"></span>
              </button>
            </Link>
          </td>
        </tr>
    )
  }
}
