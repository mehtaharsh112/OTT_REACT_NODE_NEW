import React from 'react'
import movie from './movie'

const Practice = () => {
  return (
    <>
    <div className="row">
    {movie.map((elem)=>{
       return(
        <>
                <div className="col-3">
                <div className="card" style={{width: "100%"}}>
          <img src={elem.source} class="card-img-top" alt="Not Found" />
          <div className="card-body text-center">
            <h5 className="card-title"><b>{elem.name}</b></h5>
            <p className="card-text">
             {elem.text}
            </p>
            <a href="#" className="btn btn-primary">
              Watch Now
            </a>
          </div>
        </div> 
                </div>
            
       </>
       );

    })}
    </div>
    </>
  )
}

export default Practice