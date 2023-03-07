const API_key = `06494f0e9fd6792576da210784e49756`;
const weatherLeader = City =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${API_key}`
    fetch(url)
    .then(res => res.json())
    .then(data => update(data));
    // update(data);
}
const update = data =>{   
    
    setInnerTextById('city_update', data.name);
    setInnerTextById('condition', data.weather[0].main);
    setInnerTextById('temperature', data.main.temp);

}

const setInnerTextById = (id, text) =>{
    const element = document.getElementById(id);
    element.innerText = text;
}

document.getElementById('search-btn').addEventListener('click', function(){
    const search = document.getElementById('search');
    city = search.value;
    // search.value = '';
    weatherLeader(city);
    search.value = '';
});

document.getElementById('search').addEventListener('keypress', function(k){
    
    if(k.key === 'Enter'){
    // k.preventDefault()
    // console.log(k);
    const search = document.getElementById('search');
    city = search.value;
    // search.value = '';
    weatherLeader(city);
    console.log(search.value)
    search.value = '';
    }
});