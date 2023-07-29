const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			addFavorite: (title) => {
				setStore({ favorites: [...getStore.favorites, title] })
			},

			removeFavorite: (id) => {
				setStore({
					favorites: getStore().favorites.filter((item, i) => {
						return i != id;
					})
				})
			},

			getCharacters: async () => {

				if (localStorage.getItem('characters') === null) {

					const response = await fetch("https://www.swapi.tech/api/people/");

					if (response.ok) {
						const data = await response.json();
						localStorage.setItem('characters', JSON.stringify(data))
					} else {
						console.log("Error", response.status, response.statusText);
					}
				};
			},

			getPlanets: async () => {
				if(localStorage.getItem('planets') === null) {

					const response = await fetch('https://www.swapi.tech/api/planets');

					if(response.ok) {
						const data = await response.json();
						localStorage.setItem('planets', JSON.stringify(data))
					} else {
						console.log('Error: ', response.status, response.statusText)
					}
				}
			},

			getStarships: async () =>{

				if (localStorage.getItem("starships") === null) {
	
					const response = await fetch ("https://swapi.tech/api/starships/")
					  
				if (response.ok) {
					const data = await response.json()	
					localStorage.setItem("starships", JSON.stringify(data))
				}  else {
					console.log('Error: ', response.status, response.statusText)
							 
				   }
				}
	
	
			},
		}
	}
};

export default getState;

