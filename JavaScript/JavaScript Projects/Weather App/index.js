const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");

const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");

let currentTab = userTab;
const API_key ="ea814f92352edf1b8c0dfad6be31b564";
currentTab.classList.add("current-tab");

function switchTab(clickedTab){
    if(clickedTab != currentTab){
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");

        if(!searchForm.classList.contains("active")){                   // is search form container is invisable, if yes then make it visable
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
        else{                                                           // here if search form container is visable, if yes then make if invisable
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            getFromSessionStorage();                                     //now we are in your weather tab so we need to display the weather also so first check local storage for cordinates if we have save them 
        }
    }
}

userTab.addEventListener("click",() =>{
    switchTab(userTab); 
});

searchTab.addEventListener("click" ,() => {
    switchTab(searchTab);
});

// Check if cordinates are already present in session storage
function getFromSessionStorage(){
    const localCordinates = sessionStorage.getItem("user-cordinates");
    if(!localCordinates){
        grantAccessContainer.classList("active");
    }
    else{
        const cordinates = JSON.parse(localCordinates);
        fetchUserWeatherInfo(cordinates);
    }
}

async function fetchUserWeatherInfo(cordinates){
    const {lat, lon} = cordinates;

    //make grant location invisable and show the loder
    grantAccessContainer.classList.remove("active");
    loadingScreen.classList.add("active");

    // API CALL

    try{
        const res = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${API_key}&unit=metric`);
        const data = await response.json();

        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);

    }
    catch(err){
        loadingScreen.classList.remove("active");

    }
}

function renderWeatherInfo(weatherinfo){
    
}










