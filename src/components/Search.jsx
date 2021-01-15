import React, { Component } from 'react'
import './Search.css'
class Search extends Component{
    state={
        search:'',
        type:'all'
    };
    searchWanted = (event) =>{
        if(event.key==='Enter'){
            this.props.searchContent(this.state.search,this.state.type);
        }
    }
    chooseWanted = (event)=>{
        this.setState(()=>({
            type:event.target.dataset.type
        }),() =>{
            this.props.searchContent(this.state.search,this.state.type)
        })
    }
    render(){
        return(
          <div className="container input-field">
              <div>
               <input 
                    className="validate inp" 
                    type="search" 
                    placeholder="Search"
                    value={this.state.search}
                    onChange={
                        (event)=>{this.setState({search:event.target.value})}
                    }
                    onKeyDown={this.searchWanted}
                />
                <button 
                    className="btn search-btn blue darken-1" 
                    onClick={()=>{
                        this.props.searchContent(
                            this.state.search,
                            this.state.type
                            );
                    }}
                >Search</button>
                </div>
                <div className="chs">
                <label>
                        <input 
                            className="with-gap blue darken-1" 
                            name="all" 
                            type="radio" 
                            data-type="all"
                            onChange={this.chooseWanted}
                            checked={this.state.type==='all'}
                        />
                        <span>All</span>
                        </label>
                   <label>
                        <input 
                            className="with-gap blue darken-1" 
                            name="movie" 
                            type="radio"
                            data-type="movie"
                            onChange={this.chooseWanted}
                            checked={this.state.type ==='movie'}
                        />
                        <span>Movies</span>
                </label>
                  <label>
                        <input 
                            className="with-gap blue darken-1" 
                            name="series" 
                            type="radio"
                            data-type="series"
                            onChange={this.chooseWanted}
                            checked={this.state.type==='series'}
                        />
                        <span>Series</span>
                    </label>
                </div>
          </div>
        )
    }
}
export {Search}
