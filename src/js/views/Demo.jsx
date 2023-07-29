import React, { useState, useEffect, useContext } from "react"; //1. Importar useContext
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";	//2. Importar el context desde donde esta definido

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context); //3. Ejecutar useContext y desestructurarlo en store y actions(vienen del flux)

	return (
		<div className="container">
			<ul className="list-group">
				{store.demo.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between"
							style={{ background: item.background }}>
							<Link to={"/single/" + index}>
								<span>Link to: {item.title}</span>
							</Link>
							{// Conditional render example
							// Check to see if the background is orange, if so, display the message
							item.background === "orange" ? (
								<p style={{ color: item.initial }}>
									Check store/flux.js scroll to the actions to see the code
								</p>
							) : null}
							<button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
								Change Color
							</button>
						</li>
					);
				})}
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};

//NOTA: La ruta al demo esta inactiva porque la quite del Navbar para reemplazar por el bnt de favoritos
