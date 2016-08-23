import React, {Component} from 'react';
import CompanyStore from '../stores/CompanyStore';
import StockActions from '../actions/StockActions';
import uuid from 'uuid';
import ListCompany from './ListCompany';

export default class CompanySearch extends Component {
  constructor(){
    super();

    this.changeSymbol = this.changeSymbol.bind(this);
    this._onChange = this._onChange.bind(this);
    this.submit = this.submit.bind(this);

    this.state = {
      symbol: '',
      companyData: []
    }
  }

  componentDidMount(){
    CompanyStore.startListening(this._onChange);
  }

  componentWillUnmount(){
    CompanyStore.stopListening(this._onChange);
  }

  _onChange(){
    this.setState({companyData: CompanyStore.getAll()})
  }

  changeSymbol(e){
    this.setState({symbol: e.target.value})
  }

  submit(e){
    e.preventDefault();
    let symbol = this.state.symbol;
    StockActions.getInfos(symbol);
    this.setState({symbol: ''})
  }
  render() {
    let listCompanies ;
    let data = this.state.companyData;
    listCompanies = data.map(company =>{
      company._id = uuid();
      return(
        <ListCompany key ={company._id} {...company} />
      )
    })
    return (
      <div className = 'container'>
        <form onSubmit={this.submit}>
          <div className="input-group">
            <input type="text" placeholder="Enter Symbol" value={this.state.symbol} onChange={this.changeSymbol }/>
              <button className="btn btn-info btn-md" id="btn-chat">Enter</button>
          </div>
        </form>
        <table className="table">
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Symbol</th>
            <th>Exchange</th>
            <th>Quote</th>
          </tr>
        </thead>
        <tbody>
         {listCompanies}
        </tbody>
      </table>
      </div>
    )
  }
}
