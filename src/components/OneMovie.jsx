import React from 'react'

export default function OneMovie(props) {
    const {Title,Year,imdbID,Type,Poster} = props;
    return (
        <div id={imdbID} className="card">
            <div className="card-image waves-effect waves-block waves-light">
                {
                    Poster==='N/A' 
                    ? <img className="activator" src= {`https://via.placeholder.com/300x428?text=${Title}`} alt={Title} />
                    :<img className="activator" src= {Poster} alt={Title}/>
                }
                
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{Title}</span>
                <span>{Year}</span> <span className="right">{Type}</span>
            </div>
        </div>
    )
}
