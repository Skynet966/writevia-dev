import React from 'react';
export default class NavSearch extends React.Component{
    constructor(props){
        super(props);
        this.searchText="";
        this.state={searchrslt:[]};
    }
    fetchResult(searchText){
        const url = `https://api.giphy.com/v1/gifs/search?api_key=vFRSFWo6g7vJ7ZAjt3DMDolU52ORTxwH&q=${searchText}&limit=5`;
        const promise = fetch(url);
        promise.then(response=>{
            var pr=response.json();
            pr.then(result=>{
                this.setState({searchrslt:result.data});
                console.log('result is coming',result.data);
            }).catch(err=>{
                console.log('There is error in JSON Fetching::',err);
            }).catch(err=>{
                console.log('There is some error in data fetching::',err);
            })
        })
    }
    getSearchText(event){
        this.searchText=event.target.value;
    }
    doSearch(event){
        console.log(this.searchText.length);
        if((event.keyCode === 13 || event.target.type === "button") && this.searchText.length > 2){
            console.log('Function -> doSearch');
            this.fetchResult(this.searchText);
        }
    }
    focusout(){
        document.querySelector('.nav-search-bar').classList.remove('fade-in');
        document.querySelector('.nav-search-icon.clse').classList.toggle('show');
        document.querySelector('.nav-search-icon.open').classList.toggle('show');
    }
    render(){
        return(
            <div className="nav-search-bar">
                <div className="nav-search-bar-group">
                    <input type="search" placeholder="Search our content..." onBlur={this.focusout} onChange={this.getSearchText.bind(this)} onKeyDown={this.doSearch.bind(this)} minLength='3'/>
                </div>
            </div>
        )
    }
}