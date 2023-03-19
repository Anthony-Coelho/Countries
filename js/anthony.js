var cArray = new Array();

var urlParameters= new URLSearchParams(window.location.search);
var code = urlParameters.get('CODE'); 

class Country {
	constructor (name, capital, demonym, flag, population){
		this.name = name;
		this.capital=capital; 
		this.demonym = demonym;
		this.flag=flag;
		this.population=population;
	}
} 

function loadCountries() {
		console.log("in function");
		fetch(`https://restcountries.com/v2/alpha?codes=${code}`, loadArrays)
		.then(res => res.json())
		.then((dataJSON) => {
		console.log(dataJSON);
		loadArrays(dataJSON);
		loadView(cArray, true);
		
		});
				
	} 
	


function countries() {
	loadView(cArray,true);
	}
	function goBack(){
		history.back();
	}

	function loadArrays(dataJSON) {
		var countryList=dataJSON;
		for (let country of countryList) {
		console.log(country);
		cArray.push(new Country(
			country.name,
			country.capital,
			country.demonym,
			country.flag,
			country.population
			
			
		));
		}

	}


function loadView(arrList, country) {
	if (country) {
		for (let x of arrList) {
	let name = document.getElementById("name");
	name.innerHTML = `${x.name}`;
	let cap = document.getElementById("capital");
	cap.innerHTML = `${x.capital}`;

	let dem = document.getElementById("demonym");
	dem.innerHTML = `${x.demonym}`;

	let image = document.getElementById("country-flag");
	image.src =  `${x.flag}`;

	let pop= document.getElementById("population");
	pop.innerHTML = `${x.population}`;
	}
}
}
   