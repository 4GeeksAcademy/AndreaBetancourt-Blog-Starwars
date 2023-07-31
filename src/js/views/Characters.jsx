import React, { useContext, useEffect, useState, useParams } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "../component/Spinner.jsx";
import { Context } from "../store/appContext.js";

export const Characters = () => {

    const { store, actions } = useContext(Context)
    console.log(store.characters);

    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 row-cols-xl-5 g-3">
                {!store.characters ?
                    <Spinner /> :
                    store.characters.map((characters, index) => {

                        const urlImg = "https://starwars-visualguide.com/assets/img/characters/" + (index + 1) + ".jpg";
                        const handleOnErrorImg = e => { e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg" }

                        return (
                            <div className="col" key={index}>
                                <div className="card border-white">
                                    <img src={urlImg} className="card-img-top" onError={handleOnErrorImg} style={{ objectFit: 'cover', }} />
                                    <div className="card-footer pb-3 bg-black text-white">

                                        <h5 className="card-title">{characters.name}</h5>

                                        <div className="d-flex justify-content-between">
                                            <Link to={`/characters/${characters.uid}`}>
                                                <button type="button" className="btn btn-sm btn-outline-light">Learn more</button>
                                            </ Link>
                                            {store.favorites.includes(characters.name) ?
                                                <button className="btn btn-sm btn-warning" onClick={() => actions.removeFavorite(characters.name)}>
                                                    <i className="fas fa-heart"></i>
                                                </button>
                                                : <button className="btn btn-sm btn-outline-warning" onClick={() => actions.addFavorite(characters.name)}>
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

