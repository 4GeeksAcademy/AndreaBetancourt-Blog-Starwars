import React, { useContext, useEffect, useState, useParams } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "../component/Spinner.jsx";
import { Context } from "../store/appContext.js";

export const Starships = () => {

  const { store, actions } = useContext(Context)


  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4 g-3">
        {!store.starships ?

          <Spinner /> :

          store.starships.map((starships) => {

            const urlImg = "https://starwars-visualguide.com/assets/img/starships/" + `${starships.uid}` + ".jpg";
            const handleOnErrorImg = e => { e.target.src = "https://star-wars-blog-sandy.vercel.app/star_wars_404.png" }

            return (
              <div className="col" key={starships.uid}>
                <div className="card border-white">
                  <img src={urlImg} className="card-img-top img-fluid" onError={handleOnErrorImg} style={{ objectFit: 'cover', height: '200px' }} />
                  <div className="card-body bg-black text-white">
                    <h5 className="card-title">{starships.name}</h5>
                    <div className="d-flex justify-content-between">
                      <Link to={`/starships/${starships.uid}`}>
                        <button type="button" className="btn btn-sm btn-outline-light">Learn more</button>
                      </ Link>

                      {store.favorites.includes(starships.name) ?
                        <button className="btn btn-sm btn-warning" onClick={() => actions.removeFavorite(starships.name)}>
                          <i className="fas fa-heart"></i>
                        </button>
                        : <button className="btn btn-sm btn-outline-warning" onClick={() => actions.addFavorite(starships.name)}>
                          <i className="fas fa-heart"></i>
                        </button>
                      }
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </div>

  );
}

//Nota: Solucionar las imagenes que estan corridas ya que el uid no es consecutivo