var cArray = new Array();


class Country {
	constructor (name, code, capital){
		this.name=name; 
		this.code=code;
		this.capital=capital;
	}
} 


function loadCountries() {
	console.log("in function");
fetch("dataFiles/countries.json")
.then(res => res.json())
.then((dataJSON) => {
console.log(dataJSON);
loadArrays(dataJSON);
loadSelect(cArray, true);
showInfo(cArray, true);
showCountryInfo(cArray, true);

});
} 


function countries() {
	loadView(cArray,true);
	}

function loadArrays(dataJSON) {
var countryList=dataJSON.Countries;
for (let country of countryList) {
console.log(country);
cArray.push(new Country(
	country.name,
	country.code,
	country.capital
));
}
}

function loadSelect(arrList, country) {
	let countries = document.getElementById("countries");
	countries.innerHTML = `<option value="select">Select a country</option> `;
	if (country) {
	for (let x of arrList) {
		countries.innerHTML +=
	`<option value="${x.name}">${x.name}</option> `;
	}
}
	} 
	
	function showInfo(arrList, country) {
		let showInfo = document.getElementById("showInfo");
		showInfo.innerHTML = ``;
		if (country) {
		for (let x of arrList) {
			showInfo.innerHTML +=
		`<tr id ="countries">
		<td>${x.name}</td>
		<td> - ${x.capital} - </td>
		<td>${x.code}</td>
		</tr>
		<br>
		<hr>`;
		}
	}
		}

		function showCountryInfo() {
			switch(document.getElementById('countries').value)
{
case "Canada":
window.location="../Pages/country.html?CODE=CAN";
break;

case "United States":
window.location="../Pages/country.html?CODE=USA";
break;

case "Germany":
window.location="../Pages/country.html?CODE=DE";
break;

default:
// window.location="../"; 
break;
}
}
