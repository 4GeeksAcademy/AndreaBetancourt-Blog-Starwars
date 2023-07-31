import React, { useContext, useEffect, useState, useParams } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "../component/Spinner.jsx";
import { Context } from "../store/appContext.js";

export const Planets= () => {

    const { store, actions } = useContext(Context)
    
    const [planets, setPlanets] = useState(JSON.parse(localStorage.getItem('planets')));

    console.log(store.planets);

    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 row-cols-xl-5 g-3">
                {!planets ?
                    <Spinner /> :
                    planets.results.map((planets, index) => {

                        const urlImg = "https://starwars-visualguide.com/assets/img/planets/" + (index + 1) + ".jpg";
                        const handleOnErrorImg = e => { e.target.src = "https://star-wars-blog-sandy.vercel.app/star_wars_404.png" }

                        return (
                            <div className="col" key={index}>
                                <div className="card border-white">
                                    <img src={urlImg} className="card-img-top" onError={handleOnErrorImg} style={{ objectFit: 'cover'}} />
                                    <div className="card-body bg-black text-white">
                                        <h5 className="card-title">{planets.name}</h5>
                                        <div className="d-flex justify-content-between">
                                            <Link to={`/planets/${planets.uid}`}>
                                                <button type="button" className="btn btn-sm btn-outline-light">Learn more</button>
                                            </ Link>
                                            {store.favorites.includes(planets.name) ?
                                                <button className="btn btn-sm btn-warning" onClick={() => actions.removeFavorite(planets.name)}>
                                                    <i className="fas fa-heart"></i>
                                                </button>
                                                : <button className="btn btn-sm btn-outline-warning" onClick={() => actions.addFavorite(planets.name)}>
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
