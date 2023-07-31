import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const StarshipsDetails = () => {

    const { store, actions } = useContext(Context);
    console.log(store.starships);
    
    const params = useParams()
    const idStarships = params.starshipsId;
    const starships = JSON.parse(localStorage.getItem('starships'))
    const starshipsArr = starships.results;
    console.log(starshipsArr)
    
    // El filter se realiza para obtener los datos del elemento recorrido
    const starshipsDetails = starshipsArr.filter((element => {
        
           return( idStarships === element.uid)
    }));
            
    //starshipsDetails es un Arr de 1 solo elemento por lo tanto se debe acceder por medio del index
    const url = starshipsDetails[0].url;

    const [apiStarships, setApiStarships] = useState([]);

    const getStarshipsDetails = async () => {

        try {

            const response = await fetch(url);

            if (response.ok) {

                const data = await response.json();
                setApiStarships(data.result.properties)
            } else {
                console.log('Error: ', response.status, response.statusText)
            }

        } catch (error) {
            console.log('Error: ', error)
        }

    }

    useEffect(() => {
        getStarshipsDetails();
    }, [url])

    console.log(apiStarships);

    const urlImg = "https://starwars-visualguide.com/assets/img/starships/" + `${idStarships}` + ".jpg";
    const handleOnErrorImg = e => { e.target.src = "https://star-wars-blog-sandy.vercel.app/star_wars_404.png" }

    return (
        <div className="container" style={{maxWidth: '50%'}}>
            <div className="card bg-black border-light mb-3 text-white">
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src={urlImg} className="img-fluid rounded-start" alt="..." onError={handleOnErrorImg}/>
                    </div>
                    <div className="col d-flex flex-column justify-content-between m-4">
                        <div className="card-body">
                            
                            <h2 className="card-title m-2">{apiStarships.name}</h2>
                            <p className="card-text m-2"><strong>Model: </strong>{apiStarships.model}</p>
                            <p className="card-text m-2"><strong>Starships Class: </strong>{apiStarships.starship_class}</p>
                            <p className="card-text m-2"><strong>Lenght: </strong>{apiStarships.length}</p>
                            <p className="card-text m-2"><strong>Passengers: </strong>{apiStarships.passengers}</p>
                            <p className="card-text m-2"><strong>Consumables: </strong>{apiStarships.consumables}</p>
                            <p className="card-text m-2"><strong>Cargo capacity: </strong>{apiStarships.cargo_capacity}</p>
                        </div>
                        <div className="d-flex justify-content-end">
                            <Link to={`/starships`}>
                                <button type="button" className="btn btn-outline-warning">Back Home</button>
                            </Link>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    );
        
}