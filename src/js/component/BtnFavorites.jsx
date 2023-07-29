import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext.js";

export const BtnFavorites = () => {

    const {store, actions} = useContext (Context);

    let myFavorites = store.favorites; 
    //que esta definido en el flux

    return (
        <div className="dropdown">
            <button className="btn btn-black dropdown-toggle me-3 text-white" style={{position: "relative"}} data-bs-toggle="dropdown" aria-expanded="false">
                Favorites 
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-white" style={{transform: "translate(-50%, -50%)"}}>
                    {myFavorites.length}
                </span>
            </button>
            <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end me-3">
                {myFavorites.length == 0 ? (<li><span className="dropdown-item" href="#">No favorites selected</span></li>) 
                : (myFavorites.map((item) => (
                        <li key={item.id} className="d-flex align-items-center">
                            <span className="dropdown-item" href="#"> {item.id} </span>
                            <button type="button" className="btn btn-outline-dark me-2" onClick={() => actions.removeFavorite(item, myFavorites)}>
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