import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const CharactersDetails = () => {

    const { store, actions } = useContext(Context)

    //Los parametros son los definidos en el layaut con users/:userId
    const params = useParams();
    const id = params.charactersId - 1; //Se resta 1 porque el array inicia en posicion 0
    const charactersView = JSON.parse(localStorage.getItem('characters'))
    // console.log(charactersView)
    console.log(charactersView.results)


    return (
        <div className="container"> Hola
            <div className="card border-succes mb-3">
                <h5 className="card-header">User Nº {id + 1}</h5>
                <div className="card-body">
                    <h3 className="card-title"> {charactersView.results.uid} </h3>
                </div>
                <div className="card-body text-end">
                    <Link to={`/characters`}>
                        <button className="btn btn-outline-secondary"> Back Home </button>
                    </Link>                     
                
            
                </div>
            </div>
        </div>
    );
};