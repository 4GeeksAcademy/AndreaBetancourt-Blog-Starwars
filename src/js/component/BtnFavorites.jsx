import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext.js";

export const BtnFavorites = () => {

    const {store, actions} = useContext (Context);

    return (
        <div className="dropdown">
            <button className="btn btn-black dropdown-toggle me-3 text-white" style={{position: "relative"}} data-bs-toggle="dropdown" aria-expanded="false">
                Favorites 
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-white" style={{transform: "translate(-50%, -50%)"}}>
                    {store.favorites.length}
                </span>
            </button>
            <ul className="dropdown-menu dropdown-menu-black dropdown-menu-end me-3">
                {store.favorites.length == 0 ? (<li><span className="dropdown-item" href="#">No favorites selected</span></li>) 
                : (store.favorites.map((item, id) => (
                        <li key={id} className="d-flex align-items-center">
                            <span className="dropdown-item" href="#"> {item} </span>
                            <button type="button" className="btn btn-outline-dark me-2" onClick={() => actions.removeFavorite(id)}>
                                <i className="fa fa-trash"></i>
                            </button>
                        </li>
                    ))

                    )
                }

            </ul>
        </div>
    )

}