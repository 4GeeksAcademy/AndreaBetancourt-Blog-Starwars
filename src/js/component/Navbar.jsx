import React from "react";
import { Link } from "react-router-dom";
import { BtnFavorites } from "./BtnFavorites.jsx";

export const Navbar = () => {
	return (
		<div className="container p-3">
			<div className="row flex-nowrap justify-content-between align-items-center">

				<div className="col-4 pt-1">
					<a className="link-secondary" href="https://www.starwars.com/databank">Pg Oficial</a>
				</div>

				<div className="col-4 text-center">
					<Link to="/" className="nav-item nav-link link-body-emphasis active">					
						<img id="local-nav-logo-desktop" src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png" style={{ width: "220px" }} alt="Logo StarWars" />
					</Link>
				</div>

				<div className="col-4 d-flex justify-content-end align-items-center">
					< BtnFavorites />
				</div>

			</div>

			<div className="nav-scroller py-1 mb-3 border-bottom">
				<nav className="nav nav-underline justify-content-center">
					<Link to="/characters" className="nav-item nav-link link-body-emphasis active">
						<span className="h5 text-white">Characters</span>
					</Link>
					<Link to="/planets" className="nav-item nav-link link-body-emphasis active">
						<span className="h5 text-white">Planets</span>
					</Link>
					<Link to="/starships" className="nav-item nav-link link-body-emphasis active">
						<span className="h5 text-white">Starships</span>
					</Link>
				</nav>
			</div>
		</div>
	)
}
