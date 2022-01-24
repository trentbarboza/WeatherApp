let favorites = [];

function SaveToLocalStorageByCityName(cityName)
{
    favorites.push(cityName);
    localStorage.setItem('Favorites',JSON.stringify(favorites));
}

function SaveToLocalStorage(){
    localStorage.setItem('Favorites',JSON.stringify(favorites));
}

let localStorageItem = localStorage.getItem('Favorites');

function GetLocalStorage(){
    let localStorageItem = localStorage.getItem('Favorites');
    localStorageItem != null ? favorites = JSON.parse(localStorageItem) : favorites = [];
    return favorites;
}

function RemoveFromLocalStorage(cityName){
    let cityIndex = favorites.indexOf(cityName);
    //found cityname in array favorites
    favorites.splice(cityIndex,1);
    SaveToLocalStorage();
}

// localStorage.setItem('people','jateen angel');
//let people = ['jateen','angel']

//GetLocalStorage();
//console.log(people);
//SaveToLocalStorage();

export {SaveToLocalStorageByCityName, GetLocalStorage, RemoveFromLocalStorage}