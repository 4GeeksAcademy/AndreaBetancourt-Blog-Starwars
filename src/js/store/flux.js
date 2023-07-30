const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			characters: [],
			planets: [],
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

				if(localStorage.getItem('characters') !== null){
					// Si los datos de los characters están en el almacenamiento local, obtén los datos de allí
					const charactersFromStorage = JSON.parse(localStorage.getItem('characters'));
						// Actualiza el estado de 'characters[]' en el store
					setStore({ characters: charactersFromStorage.results});

				} else {
					// Si no entonces realiza la solicitud a la API
					const response = await fetch('https://www.swapi.tech/api/people');

					if(response.ok) {

						const data = await response.json();
						localStorage.setItem('characters', JSON.stringify(data))
						setStore({ characters: data.results });
						
					} else {
						console.log('Error: ', response.status, response.statusText)
					}	
				}
				
			},

			getPlanets: async () => {
				if (localStorage.getItem('planets') !== null) {
					// Si los datos de los planetas están en el almacenamiento local, obtén los datos de allí
					const planetsFromStorage = JSON.parse(localStorage.getItem('planets'));
				  	setStore({ planets: planetsFromStorage.results });
				
				} else {
					// Si no entonces que haga el fetch
				  const response = await fetch('https://www.swapi.tech/api/planets');
		
				  if (response.ok) {
					const data = await response.json();
					localStorage.setItem('planets', JSON.stringify(data));
		
					// Actualiza el estado del store con los datos de los planetas obtenidos
					setStore({ planets: data.results });
				  } else {
					console.log('Error: ', response.status, response.statusText);
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

