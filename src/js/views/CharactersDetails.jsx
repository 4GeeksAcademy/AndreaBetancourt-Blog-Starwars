import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const CharactersDetails = () => {

    const { store, actions } = useContext(Context);

    //Los parametros son los definidos en el layaut con users/:userId
    const params = useParams();
    const id = params.charactersId - 1; //Se resta 1 porque el array inicia en posicion 0
    const charactersView = JSON.parse(localStorage.getItem('characters'));
    const charactersArr = charactersView.results;
    const url = charactersArr[id].url

    const [people, setPeople] = useState([]);

    const getCharactersDetails = async () => {

        try {
            const response = await fetch(url);

            if (response.ok) {

                const data = await response.json();
                setPeople(data.result.properties);

            } else {
                console.log('Error: ', response.status, response.statusText)
            }
        } catch (error) {
            console.log('Error: ', error)
        }

    };

    useEffect(() => {
        getCharactersDetails();
    }, []);
    console.log(people)

    const urlImage = "https://starwars-visualguide.com/assets/img/characters/" + (id + 1) + ".jpg";
    const handleOnErrorImg = (e) => { e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg" };

    return (
        <div className="container" style={{maxWidth: '50%'}}>
            <div className="card bg-black border-light mb-3 text-white">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={urlImage} className="img-fluid rounded-start" alt="..." onError={handleOnErrorImg}/>
                    </div>
                    <div className="col">
                        <div className="card-body">
                            <h2 className="card-title">{people.name}</h2>
                            <p className="card-text m-1"><strong>Gender: </strong>{people.gender}</p>
                            <p className="card-text m-1"><strong>Birth Year: </strong> {people.birth_year}</p>
                            <p className="card-text m-1"><strong>Hair Color: </strong> {people.hair_color}</p>
                            <p className="card-text m-1"><strong>Eye Color: </strong> {people.eye_color}</p>
                            <p className="card-text m-1"><strong>Height: </strong> {people.height}</p>

                            <Link to={`/characters`}>
                                <button type="button" class="btn btn-outline-warning">Back Home</button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};