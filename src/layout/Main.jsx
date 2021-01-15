import React, { Component } from 'react'
import './Main.css'
import Movies from '../components/Movies'
import Preloader from '../components/Preloader'
import {Search} from '../components/Search'

const API_KEY = process.anv.REACT_APP_API_KEY;
class Main extends Component{
    state={
        movies:[],
        loading:true,
    };

    componentDidMount(){
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
        .then(response => response.json())
        .then(data=>this.setState({movies:data.Search,loading:false}))
    }
    searchContent = (cont,type='all') =>{
        this.setState({loading:true})
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${cont}${type !== 'all' ? `&type=${type}` : ''}`)
        .then(response => response.json())
        .then(data=>this.setState({movies:data.Search,loading:false}))
    }
   render(){
       const {movies,loading} = this.state
       return(
           <main className="container content">
               <Search searchContent={this.searchContent} />
               {
                  loading 
                   ? <Preloader/>
                   : <Movies movies = {movies}/>
               }
           </main>
       )
   }
}
export {Main}