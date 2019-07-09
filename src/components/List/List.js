import React from 'react'
import Table from './Table'
import Pagination from './Pagination'
import {handleResponse} from '../../helper';
import {API_URL} from '../../config'
import './table.css'


class List extends React.Component {
    constructor() {
        super();
        this.state = {
            loading : false,
            currencies : [],
            error: null,
            totalPages:0,
            page:1,
        }
    }
    
    componentDidMount(){
        this.fetchCurrencies()
    }
    fetchCurrencies(){
        this.setState({
            loading:true
        })
        const {page} = this.state
        fetch(`${API_URL}/cryptocurrencies?page=${page}&perPage=20`)
        .then(handleResponse)
        .then((data) => {  
            this.setState({
                currencies:data.currencies,
                totalPages: data.totalPages,
                loading:false,
            });
        }
        )
    
    }
    renderChangePercent(percent){
        if(percent>0){
            return <span className="percent-raised">
                {percent}&uarr;
                </span>
        }else if (percent<0){
            return <span className="percent-fallen">
                {percent}&darr;
            </span>
        }else{
             return <span>{percent}</span>
        }
    }
    handlePaginationClick = direction => {
        let nextPage = this.state.page; 
        nextPage = direction === 'next' ? nextPage + 1 : nextPage - 1;
        this.setState({
            page: nextPage,
            
        },()=>{this.fetchCurrencies()})
        
       
    }
    render() {
            const {loading, currencies, error,totalPages,page} = this.state;//destrukturizacia;
           console.log(this.state);
           
            if(loading){
                return (
                    <div>
                        loading..............
                    </div>
                )
            }
            return(
                <div >
                    <Table
                        currencies = {currencies} 
                        renderChangePercent = {this.renderChangePercent}

                    />
                    <Pagination 
                        page = {page}
                        totalPages = {totalPages}
                        handlePaginationClick = {this.handlePaginationClick}
                    />
                </div>
            )
               
        }
    
}
export default List ;
