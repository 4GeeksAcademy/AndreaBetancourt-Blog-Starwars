const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			characters: [],
			// planets: [],
			// starships: [],
		},
		actions: {
			// Use getActions to call a function within a fuction

			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},

			addFavorite: (title) => {
				setStore({ favorites: [...getStore().favorites, title] })
			},

			removeFavorite: (id) => {
				setStore({
					favorites: getStore().favorites.filter((item, i) => {
						return i != id;
					})
				})
				//Esta fx recibe un id(indice del arr) y filtra todos los que sean distintos al arr que esta enviando y guarda el rdo en favorite
			},

			getCharacters: async () => {

				if(localStorage.getItem('characters') === null){
					const response = await fetch('https://www.swapi.tech/api/people');

					if(response.ok) {

						const data = await response.json();
						localStorage.setItem('characters', JSON.stringify(data))
					} else {
						console.log('Error: ', response.status, response.statusText)
					}
				}
				
			},

			getPlanets: async () => {

				if (localStorage.getItem('planets') === null) {

					const response = await fetch('https://www.swapi.tech/api/planets');

					if (response.ok) {
						const data = await response.json();
						localStorage.setItem('planets', JSON.stringify(data))
					} else {
						console.log('Error: ', response.status, response.statusText)
					}
				}
			},

			getStarships: async () => {

				if (localStorage.getItem("starships") === null) {

					const response = await fetch("https://swapi.tech/api/starships/")

					if (response.ok) {
						const data = await response.json()
						localStorage.setItem("starships", JSON.stringify(data))
					} else {
						console.log('Error: ', response.status, response.statusText)

					}
				}
			},
		}
	}
};

export default getState;

